import keyCode from "../basic/KeyCode.js";
import keyListener from "../basic/KeyListener.js";

class KeyController {
  constructor(peerId) {
    this.peerId = peerId;
    this.state = null;
    this.keyListener = keyListener;
  }

  setKeyListener(keyListener) {
    this.keyListener = keyListener;
  }

  init(characterController) {
    console.log('keyController')
    this.state = characterController.state;
    this.state['translation'] = { x: 0, y: 0 };
    this.state['rotation'] = { y: 0 };
    this.state['angle'] = { y: 0 };
  }

  tick() {
    this.state.translation.x = 0;
    this.state.translation.y = 0;
    this.state.rotation.y = 0;
    this.state.angle.y = 0;

    if (this.keyListener.isPressed(keyCode.KEY_W)) this.state.translation.y = 1;
    if (this.keyListener.isPressed(keyCode.KEY_S)) this.state.translation.y = -1;
    if (this.keyListener.isPressed(keyCode.KEY_A)) this.state.translation.x = 1;
    if (this.keyListener.isPressed(keyCode.KEY_D)) this.state.translation.x = -1;
    if (this.keyListener.isPressed(keyCode.LEFT_ARROW)) this.state.rotation.y = 1;
    if (this.keyListener.isPressed(keyCode.RIGHT_ARROW)) this.state.rotation.y = -1;


    /*
    if (this.keyListener.isPressed(keyCode.LEFT_ARROW)) this.state.angle.y = 1;
    if (this.keyListener.isPressed(keyCode.RIGHT_ARROW)) this.state.angle.y = -1;*/
  }
}

const keyController = new KeyController()

export default keyController

export { KeyController }