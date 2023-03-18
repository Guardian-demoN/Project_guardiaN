/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

class CUBE {
  static drawHorizontalSLine(scene, material, p1, p2) {
    const curve = new THREE.CubicBezierCurve(
      p1,
      new THREE.Vector2(p2.x, p1.y),
      new THREE.Vector2(p1.x, p2.y),
      p2,
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const curveObject = new THREE.Line(geometry, material);

    scene.add(curveObject);
  }

  static drawVerticalSLine(scene, material, p1, p2) {
    const curve = new THREE.CubicBezierCurve(
      p1,
      new THREE.Vector2(p1.x, p2.y),
      new THREE.Vector2(p2.x, p1.y),
      p2,
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const curveObject = new THREE.Line(geometry, material);

    scene.add(curveObject);
  }
}

export default CUBE;

// export default this;
