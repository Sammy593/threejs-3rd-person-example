import * as THREE from 'three';

const geometry = new THREE.RingGeometry()
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const Otro = new THREE.Mesh( geometry, material );

Otro.name = 'otro';
Otro.position.set(0,1,0)//horizontal, vertical, diagonal (negativo: derecha, positivo: izquierda)

export default Otro;