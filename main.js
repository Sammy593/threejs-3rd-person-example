import * as THREE from 'three'
import * as FFLATE from 'fflate'

import Scene from './src/basic/Scene'
import Camera from './src/basic/Camera'
import Renderer, { canvas } from './src/basic/Renderer'
import Light from './src/basic/Light'
// Shapes
import Plane from './src/basic/shapes/Plane'
import Cube from './src/basic/shapes/Cube'
import Otro from './src/basic/shapes/Otro'
//Animations
import { rotatey } from './src/basic/animations/Rotations'
// Tools
import Resize from './src/basic/Resize'
import keyListener from './src/basic/KeyListener'
import loopMachine from './src/basic/LoopMachine'
// Loaders
import X_BotLoader from './src/models/characters/Xbot/X_BotLoader'
//Controllers
import characterController from './src/controllers/CharacterController'
import keyController from './src/controllers/KeyController'
import moveController from './src/controllers/MoveController'
import animationController from './src/controllers/AnimationController'
import modeController from './src/controllers/ModeController'
import rotationController from './src/controllers/RotationController'
import cRotationController from './src/controllers/CRotationController'
import cameraController from './src/controllers/CameraController'
import mouse from './src/basic/Mouse'

Scene.add( Cube )
// Scene.add( Otro )
Scene.add( Light )
Scene.add( Plane )

Camera.position.set(2,2,-2) //horizontal x, vertical y, diagonal z (negativo: derecha, positivo: izquierda)

X_BotLoader().then(bot => {
    Scene.add(bot)
    characterController.addCharacter(bot)
    characterController.addController(keyController)
    characterController.addController(moveController)
    characterController.addController(animationController)
    characterController.addController(modeController)
    characterController.addController(cRotationController)
    cameraController.setCamera(Camera)
    characterController.addController(cameraController)
    mouse.setCanvas(canvas)
    mouse.start()
    characterController.start()
})

//Renderer.setAnimationLoop(animate)
loopMachine.addCallback(() => {
    //Camera.lookAt(Cube.position)
    //rotatey()
    Renderer.render( Scene, Camera );
})

Resize.start(Renderer)
loopMachine.start()
keyListener.start()
characterController.start()
