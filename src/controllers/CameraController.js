import * as THREE from 'three';
import mouse from "../basic/Mouse";
import { mode } from "./ModeController";

class CameraController {
    constructor(peerId) {
        this.peerId = peerId;
        this.character = null;
        this.radio = 3;
        this.ratio = 15;
        this.ahead = this.radio * this.ratio;
        this.height = 1.4;
        this.angle = 0.15;
        this.camera = null;
        this.state = null;
        this.target = new THREE.Vector3();
        this.x = 0;
        this.y = 0;
    }

    init(characterController) {
        this.character = characterController.character;
        this.state = characterController.state;
        this.state.target = this.target;
    }

    setCamera(camera) {
        this.camera = camera;
    }

    cameraPosition(position) {
        if (!this.camera) return;
        this.camera.position.set(
            position.x - Math.sin(this.x + this.angle) * this.radio,
            position.y + this.height + (this.y / 500),
            position.z - Math.cos(this.x + this.angle) * this.radio
        );
    }

    cameraLookAt(position) {
        if (!this.camera) return;
        this.target.set(
            position.x + Math.sin(this.x) * this.ahead,
            position.y + this.height + (this.y / 500) * this.ratio,
            position.z + Math.cos(this.x) * this.ahead
        );
        this.camera.lookAt(this.target);
        this.state.cRotation.y = THREE.MathUtils.lerp(this.state.cRotation.y, this.x, 0.1);
    }

    tick() {
        this.ahead = this.radio * this.ratio
        // Usa el movimiento del mouse para actualizar las coordenadas x e y
        this.y = THREE.MathUtils.lerp(this.y, mouse.acumulated.y, 0.1); // Vertical
        this.x = THREE.MathUtils.lerp(this.x, -mouse.acumulated.x / 1000, 0.1); // Horizontal

        if (!this.character) return;
        const position = this.character.position.clone();

        let radioTmp = this.state.mode === mode.SHOOTER ? 2 : 2;
        let angleTmp = this.state.mode === mode.SHOOTER ? 0.45 : 0.15;
        let heightTmp = this.state.mode === mode.SHOOTER ? 2 : 2;
        this.radio = THREE.MathUtils.lerp(this.radio, radioTmp, 0.1);
        this.angle = THREE.MathUtils.lerp(this.angle, angleTmp, 0.1);
        this.height = THREE.MathUtils.lerp(this.height, heightTmp, 0.1);

        this.cameraPosition(position);
        this.cameraLookAt(position); // Siempre enfoca el personaje
    }
}

const cameraController = new CameraController();

export default cameraController;
export { CameraController };
