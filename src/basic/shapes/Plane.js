import * as THREE from 'three'

const geometry = new THREE.PlaneGeometry( 8, 6 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff12, side: THREE.DoubleSide} );
const Plane = new THREE.Mesh( geometry, material );

Plane.rotation.x += Math.PI *.5  // rotacion de 90°

export default Plane