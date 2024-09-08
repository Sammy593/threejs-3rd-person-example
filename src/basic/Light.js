import * as THREE from 'three';

const Light = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );

directionalLight.position.set(-10,10,10);

Light.add(directionalLight);


export default Light;