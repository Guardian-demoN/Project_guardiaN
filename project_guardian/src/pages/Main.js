import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainCanvas from '../components/MainCanvas';
import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
import CompanionList from '../components/CompanionList';
import ArticleTemplate from '../components/ArticleTemplate';

function Main() {
  return (
    <Router>
      <PageContainer>
        {/* <Header /> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainCanvas />} />
          <Route path="/articles/:category/:subject/:index" element={<ArticleTemplate />} />
          <Route path="/articles" element={<ArticleTemplate />} />
          <Route path="/members" element={<CompanionList />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default Main;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
`;
