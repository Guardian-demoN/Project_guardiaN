/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { CineonToneMapping } from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

function CompanionList() {
  // three.js handler
  const canvasId = 'canvas';
  useEffect(() => {
    let scene;
    let camera;
    let controls;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let currentIntersection;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      controls.handleResize();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onPointerMove(event) {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('pointermove', onPointerMove);

    let mesh;
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
      camera.position.set(0, 0, 200);
      camera.lookAt(0, 0, 0);

      // controls = new TrackballControls(camera, renderer.domElement);
      // controls.minDistance = 0.1;
      // controls.maxDistance = 0.5;
      // controls.rotateSpeed = 5.0;

      renderer.render(scene, camera);
    }

    function init() {
      const geometry = new THREE.BoxGeometry(5, 5, 5);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

      for (let i = -2; i <= 2; i += 1) {
        for (let j = -2; j <= 2; j += 1) {
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(10 * i, 10 * j, 0);
          scene.add(mesh);
        }
      }

      renderer.render(scene, camera);
    }

    function animate() {
      requestAnimationFrame(animate);
      // update the picking ray with the camera and pointer position
      raycaster.setFromCamera(pointer, camera);

      // calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        if (intersects[0].object !== currentIntersection) {
          if (currentIntersection) {
            currentIntersection.material.color = currentIntersection.currentColor;
          }
          currentIntersection = intersects[0].object;
          console.log(currentIntersection.material);
          currentIntersection.currentColor = currentIntersection.material.color;
          currentIntersection.matrix.color = new THREE.Color(1, 0, 0);
        }
      } else {
        if (currentIntersection) {
          currentIntersection.material.color = currentIntersection.currentColor;
        }
        currentIntersection = null;
      }

      // controls.update();
      renderer.render(scene, camera);
    }

    setup();
    init();
    animate();
  }, []);
  return <CompListComponent id={canvasId} />;
}

export default CompanionList;

const CompListComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  translate: all 1s;
`;
