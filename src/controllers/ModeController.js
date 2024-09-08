const mode = {
    "IDLE": 0,
    "STEALTH": 1,
    "RUNNER": 2,
    "SHOOTER": 3
};

class ModeController {
    init(characterController) {
        console.log('modeController');
        if (characterController && characterController.state) {
            this.state = characterController.state;
            this.state['mode'] = mode.IDLE;
        } else {
            console.error('characterController or characterController.state is undefined');
        }
    }

    tick() {
        // this.state.mode = mode.IDLE;
        // if (this.keyListener && this.keyListener.isPressed(keyCode.SHIFT)) {
        //     this.state.mode = mode.SHOOTER;
        // }
    }
}

const modeController = new ModeController();

export default modeController;
export { ModeController, mode };
