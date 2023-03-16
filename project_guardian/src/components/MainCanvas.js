/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import PropTypes from 'prop-types';

function MainCanvas(props) {
  const canvasId = 'canvas';
  useEffect(() => {
    // console.log('render');
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // // renderer.setSize(1920, 1080);
    // // document.body.appendChild(renderer.domElement);
    // document.getElementById('canvas').appendChild(renderer.domElement);
    // // canvasRef.current.appendChild(renderer.domElement);

    // eslint-disable-next-line max-len
    // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    // camera.position.set(0, 0, 100);
    // camera.lookAt(0, 0, 0);

    // const scene = new THREE.Scene();

    // // create a blue LineBasicMaterial
    // const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    // const points = [];
    // points.push(new THREE.Vector3(-10, 0, 0));
    // points.push(new THREE.Vector3(0, 10, 0));
    // points.push(new THREE.Vector3(10, 0, 0));

    // const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // const line = new THREE.Line(geometry, material);

    // scene.add(line);
    // renderer.render(scene, camera);
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

      let geometry = new THREE.BufferGeometry().setFromPoints(rectPoints);

      const line = new THREE.Line(geometry, material);

      // const points = [];
      // points.push(new THREE.Vector3(-10, 0, 0));
      // points.push(new THREE.Vector3(0, 10, 0));
      // points.push(new THREE.Vector3(10, 0, 0));

      const curve = new THREE.CubicBezierCurve(
        new THREE.Vector2(-20, -10),
        new THREE.Vector2(20, -10),
        new THREE.Vector2(-20, 10),
        new THREE.Vector2(20, 10),
      );

      const points = curve.getPoints(50);
      geometry = new THREE.BufferGeometry().setFromPoints(points);

      const curveObject = new THREE.Line(geometry, material);

      scene.add(line);
      scene.add(curveObject);
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
