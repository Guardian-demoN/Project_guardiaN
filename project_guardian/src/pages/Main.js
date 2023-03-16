import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import MainCanvas from '../components/MainCanvas';

function Main() {
  return (
    <PageContainer>
      <Header />
      <MainCanvas />
      <Sidebar />
    </PageContainer>
  );
}

export default Main;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  background-color: blue;
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  border: 1px solid black;
`;
