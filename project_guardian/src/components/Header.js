import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

const headerEnterHeight = '2vh';
const headerLeaveHeight = '5vh';

function Header() {
  const containerRef = createRef();
  const mouseEnterOnHeader = () => {
    const headerContainer = containerRef.current;
    // console.log('enter');
    if (headerContainer !== null) {
      headerContainer.classList.remove('shrinked');
    }
  };
  const mouseLeaveOnHeader = () => {
    const headerContainer = containerRef.current;
    // console.log('leave');
    if (headerContainer !== null) {
      headerContainer.classList.add('shrinked');
    }
  };
  return (
    <HeaderComponent>
      <HeaderLeaveHitbox onMouseLeave={mouseLeaveOnHeader}>
        <HeaderEnterHitbox onMouseEnter={mouseEnterOnHeader} />
      </HeaderLeaveHitbox>
      <HeaderContainer ref={containerRef} className="header shrinked">
        <h2>
          Project_guardiaN
        </h2>
      </HeaderContainer>
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.header`
  position: fixed;
  top: -1px;
  left: 0;
  width: 100vw;
  font-size: 1rem;
  border: 1px solid gray;

  div{
    width: 100%;
  }

  li a{
    text-decoration: none;
  }

  .header.shrinked{
    height: 0;
    transition: all 0.5s;
  }
`;

const HeaderEnterHitbox = styled.div`
  border: 1px solid white;
  height: ${headerEnterHeight};
  background: transparent;
`;

const HeaderLeaveHitbox = styled.div`
  position: fixed;
  height: ${headerLeaveHeight};
  background: transparent;
  border: 2px dotted red;
`;

const HeaderContainer = styled.div`
  height: ${headerLeaveHeight};
  overflow-x: hidden;
  transition: all 0.5s;
  background-color: gray;
`;
