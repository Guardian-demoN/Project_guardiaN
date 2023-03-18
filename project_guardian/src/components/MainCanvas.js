/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import CUBE from '../cubeLib/2D';

function MainCanvas(props) {
  const canvasId = 'canvas';
  useEffect(() => {
    function init() {
      // make renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const container = document.getElementById(canvasId);
      container.appendChild(renderer.domElement);

      // make scene
      const scene = new THREE.Scene();

      // set camera
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        500,
      );
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);

      // drawing line
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const rectPoints = [
        new THREE.Vector3(10, 10, 0),
        new THREE.Vector3(10, -10, 0),
        new THREE.Vector3(-10, -10, 0),
        new THREE.Vector3(-10, 10, 0),
        new THREE.Vector3(10, 10, 0),
      ];

      const geometry = new THREE.BufferGeometry().setFromPoints(rectPoints);

      const line = new THREE.Line(geometry, material);

      // const points = [];
      // points.push(new THREE.Vector3(-10, 0, 0));
      // points.push(new THREE.Vector3(0, 10, 0));
      // points.push(new THREE.Vector3(10, 0, 0));

      const p1 = new THREE.Vector2(50, 10);
      const p2 = new THREE.Vector2(-50, -10);

      CUBE.drawVerticalSLine(scene, material, p1, p2);
      CUBE.drawHorizontalSLine(scene, material, p1, p2);

      scene.add(line);
      renderer.render(scene, camera);
    }

    function animate() {

    }

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    init();
    animate();
  }, []);
  return (
    <InnerCanvas id={canvasId} />
  );
}

export default MainCanvas;

const InnerCanvas = styled.div`
  height: 100vh;
  width: 100vw;
`;
