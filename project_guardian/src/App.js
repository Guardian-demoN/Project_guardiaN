import React from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import GlobalStyle from './styles/CommonStyle';
// https://ko.redux.js.org/introduction/getting-started

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Main />
    </MainContainer>
  );
}

const MainContainer = styled.div`

`;

export default App;
