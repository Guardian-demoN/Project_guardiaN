/* eslint-disable react/prop-types */
import * as THREE from 'three';

class CUBE {
  static drawCube(scene, material, p1, p2) {
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }
}

export default CUBE;
