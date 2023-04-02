/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

import CUBE from '../cubeLib/CUBE';

function MainCanvas() {
  // three.js handler
  const canvasId = 'canvas';
  useEffect(() => {
    let scene;
    let camera;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    function setup() {
      // make renderer
      // renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const container = document.getElementById(canvasId);
      container.appendChild(renderer.domElement);

      // make scene
      scene = new THREE.Scene();

      // set camera
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    function init() {
      // drawing line
      let material = new THREE.LineBasicMaterial({ color: 0x0000ff });

      const p1 = new THREE.Vector2(50, 10);
      const p2 = new THREE.Vector2(-50, -10);

      CUBE.drawVerticalSLine(scene, material, p1, p2);
      CUBE.drawHorizontalSLine(scene, material, p1, p2);
      CUBE.drawSquare(scene, material, p1, p2);

      const points = [];

      for (let i = 0; i < 50; i += 1) {
        points.push(
          new THREE.Vector2(Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50, (i - 5) * 2),
        );
      }
      const map = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg');
      map.wrapT = THREE.RepeatWrapping;
      map.wrapS = map.wrapT;
      map.anisotropy = 16;
      material = new THREE.MeshPhongMaterial({ map, side: THREE.DoubleSide });
      const object = new THREE.Mesh(new THREE.LatheGeometry(points, 20), material);
      object.position.set(-100, 0, -200);
      scene.add(object); // scene.add(line);

      renderer.render(scene, camera);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    setup();
    init();
    animate();
  }, []);
  return <InnerCanvas id={canvasId} />;
}

export default MainCanvas;

const InnerCanvas = styled.div`
  border: 1px solid red;
  background-color: red;
  height: 100vh;
  width: 100vw;
`;
