class Mouse {
    constructor() {
        this.delta = null;
        this.acumulated = null;
        this.caster = null;
        this.canvas = null;

        this._click = this._click.bind(this);
        this._toggle = this._toggle.bind(this);
        this._move = this._move.bind(this);
    }

    setCaster(caster) {
        this.caster = caster;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    start() {
        this.delta = { x: 0, y: 0 };
        this.acumulated = { x: 0, y: 0 };

        if (!this.canvas) {
            alert("No canvas selected");
            return;
        }

        this.canvas.requestPointerLock =
            this.canvas.requestPointerLock ||
            this.canvas.mozRequestPointerLock;

        this.canvas.addEventListener("click", this._click);
        document.addEventListener("pointerlockchange", this._toggle);
        document.addEventListener("mozpointerlockchange", this._toggle);
    }

    stop() {
        if (this.canvas) {
            this.canvas.removeEventListener("click", this._click);
        }
        document.removeEventListener("pointerlockchange", this._toggle);
        document.removeEventListener("mozpointerlockchange", this._toggle);
    }

    _click() {
        if (this.canvas.requestPointerLock) {
            this.canvas.requestPointerLock();
        } else {
            console.error("Pointer lock is not supported on this browser.");
        }
    }

    _toggle() {
        if (
            document.pointerLockElement === this.canvas ||
            document.mozPointerLockElement === this.canvas
        ) {
            document.addEventListener("mousemove", this._move);
        } else {
            document.removeEventListener("mousemove", this._move);
        }
    }

    _move(event) {
        this.delta.x = event.movementX || 0;
        this.delta.y = event.movementY || 0;
        this.acumulated.x += this.delta.x; // Acumula el movimiento en el eje X para la rotación horizontal
        this.acumulated.y += this.delta.y;
    
        if (this.caster) {
            this.caster({
                delta: this.delta,
                acumulated: this.acumulated,
            });
        }
    }
}

const mouse = new Mouse();

export default mouse;
export { Mouse };
