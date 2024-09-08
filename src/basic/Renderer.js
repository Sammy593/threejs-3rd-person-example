import * as THREE from 'three';

// Crear el renderer
const Renderer = new THREE.WebGLRenderer({antialias: true});
Renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Renderer.domElement);

// Configurar la codificación de salida
Renderer.outputEncoding = THREE.sRGBEncoding;

// Configurar el tipo de toneMapping
Renderer.toneMapping = THREE.ACESFilmicToneMapping; // O cualquier otro tipo que prefieras

// Ajustar la exposición del toneMapping
Renderer.toneMappingExposure = 8.3; // Asegúrate de que esté después de configurar el tipo de toneMapping

// Obtener el canvas
const canvas = Renderer.domElement;

export default Renderer;
export { canvas };
