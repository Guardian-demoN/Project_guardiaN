/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function ArticleTemplate() {
  // undefined if not defined
  const { category, subject, index } = useParams();
  useEffect(() => {
    console.log(category);
    console.log(subject);
    console.log(index);
  });
  return (
    <ArticleContainer>
      <ArticleHeaderContainer>
        <div>test</div>
      </ArticleHeaderContainer>
      <ArticleContentContainer>
        <div>test</div>
      </ArticleContentContainer>
    </ArticleContainer>
  );
}

export default ArticleTemplate;

const ArticleContainer = styled.div`
  height: 100%;
  background-color: beige;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ArticleHeaderContainer = styled.div``;

const ArticleContentContainer = styled.div``;
