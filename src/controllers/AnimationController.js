import animationBehaviour from '../basic/animations/AnimacionBehaviour'
import TransitionHandler from '../basic/animations/TransitionHandler'
import { mode } from './ModeController'

class AnimationController{
    constructor(){
        this.state = null
        this.transitionHandler = null
    }
    init(characterController){
        console.log('AnimationController')
        this.state = characterController.state
        if(!this.transitionHandler){
            this.transitionHandler = new TransitionHandler(characterController.character)
        }
        this.transitionHandler.start();
    }
    stop(){
        this.transitionHandler.stop()
    }
    tick(){
        const speed = 1.2
        if(this.state.mode == mode.IDLE){
            if(false){

            }else if(this.state.translation.x == 1){
                this.transitionHandler.action(animationBehaviour.left, speed)
            }else if(this.state.translation.x == -1){
                this.transitionHandler.action(animationBehaviour.right, speed)
            }else if(this.state.translation.y == 1){
                this.transitionHandler.action(animationBehaviour.run, speed)
            }else if(this.state.translation.y == -1){
                this.transitionHandler.action(animationBehaviour.runBack, speed)
            }else {
                this.transitionHandler.action(animationBehaviour.idle, speed)
            }
        }
        if(this.state.mode == mode.SHOOTER){
            if(false){

            }else if(this.state.translation.x == 1){
                this.transitionHandler.action(animationBehaviour.rifle_left, speed*0+1)
            }else if(this.state.translation.x == -1){
                this.transitionHandler.action(animationBehaviour.rifle_right, speed*0+1)
            } else if(this.state.translation.y == 1){
                this.transitionHandler.action(animationBehaviour.rifle_run, speed)
            } else if (this.state.translation,y == -1){
                this.transitionHandler.action(animationBehaviour.rifle_runBack, speed)
            }else{
                this.transitionHandler.action(animationBehaviour.rifle_idle, speed)
            }
        }
    }
}

const animationController = new AnimationController()

export default animationController

export { AnimationController }