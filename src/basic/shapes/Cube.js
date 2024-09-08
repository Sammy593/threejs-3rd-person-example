import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const Cube = new THREE.Mesh( geometry, material );

Cube.name = 'cube';
Cube.position.set(0,0.5,0)//horizontal, vertical, diagonal (negativo: derecha, positivo: izquierda)

export default Cube;