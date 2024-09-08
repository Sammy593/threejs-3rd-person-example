import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/Addons.js';

import fileList from "./Filelist"
import PromiseLoader from '../../../basic/PromiseLoader';
import AnimationLoader from '../../../basic/animations/AnimationLoader'

const folder = 'src/models/characters/Xbot/'

const urlAnimations = {}
for (const [key, value] of Object.entries(fileList)){
    urlAnimations[key] = folder + 'animations/' + value
}

const urlModel = folder + 'X_Bot.fbx'

const X_BotLoader = () => {
    const animationLoader = new AnimationLoader(urlModel, urlAnimations)
    const promiseLoader = new PromiseLoader(FBXLoader, function (object) {
        const scale = .01
        object.scale.set(scale, scale, scale)
        object.traverse(function (child){
            if(child.isMesh){
                child.castShadow = true
                child.receiveShadow = true 
            }
        })
        object.castShadow = true 
        object.receiveShadow = true
        return object

    })
    animationLoader.addPromiseLoader(promiseLoader)
    return animationLoader.getModelWithAnimations()
}

export default X_BotLoader
