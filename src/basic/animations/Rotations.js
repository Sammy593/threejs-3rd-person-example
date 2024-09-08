import * as THREE from 'three'

import Scene from '../Scene'
import Renderer from '../Renderer'
import Camera from '../Camera'
//Shapes
import Cube from '../shapes/Cube'

// Tools
import keyCode from '../KeyCode'
import keyListener from '../KeyListener'
// import loopMachine from './LoopMachine'

export const animate = () => {
	//Cube.rotation.x += 0.01;
	if(keyListener.isPressed(keyCode.ENTER)) Cube.rotation.y += 0.01;
	Renderer.render( Scene, Camera );
}

export const rotatey = () => {
	if(keyListener.isPressed(keyCode.ENTER)) Cube.rotation.y += 0.01;
	Renderer.render( Scene, Camera );
}
