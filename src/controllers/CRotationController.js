import * as THREE from 'three';
import mouse from "../basic/Mouse";

class CRotationController {
    constructor(peerId) {
        this.peerId = peerId;
        this.cRotation = null;
        this.rotation = null;
        this.speed = 0.001; // Ajusta la velocidad según sea necesario
    }

    init(characterController) {
        if (typeof characterController.state.cRotation === 'undefined') {
            characterController.state.cRotation = new THREE.Euler(
                characterController.character.rotation.x,
                characterController.character.rotation.y,
                characterController.character.rotation.z
            );
        }
        this.cRotation = characterController.state.cRotation;
        this.rotation = characterController.character.rotation;
    }

    tick() {
        const lerpFactor = 0.2;
        if (this.rotation && this.cRotation) {
            this.rotation.x = THREE.MathUtils.lerp(this.rotation.x, this.cRotation.x, lerpFactor);
            this.rotation.y = THREE.MathUtils.lerp(this.rotation.y, this.cRotation.y, lerpFactor);
            this.rotation.z = THREE.MathUtils.lerp(this.rotation.z, this.cRotation.z, lerpFactor); // Corregido: interpolación para el eje z
        }
    }
}

const cRotationController = new CRotationController();

export default cRotationController;
export { CRotationController };
