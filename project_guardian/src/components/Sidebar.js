import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const sidebarEnterWidth = '5vw';
const sidebarVisibleWidth = '20vw';

function Sidebar() {
  const containerRef = createRef();
  const mouseEnterOnSidebar = () => {
    const sidebarContainer = containerRef.current;
    // console.log('enter');
    if (sidebarContainer !== null) {
      sidebarContainer.classList.remove('shrinked');
    }
  };
  const mouseLeaveOnSidebar = () => {
    const sidebarContainer = containerRef.current;
    // console.log('leave');
    if (sidebarContainer !== null) {
      sidebarContainer.classList.add('shrinked');
    }
  };
  return (
    <SidebarComponent
      onMouseLeave={mouseLeaveOnSidebar}
      onMouseEnter={mouseEnterOnSidebar}
    >
      <SidebarVisible ref={containerRef} className="sidebar shrinked">
        <h2>
          Project_guardiaN
        </h2>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/tree">tree</Link></li>
          <li><Link to="/articles">articles</Link></li>
          <li><Link to="/stories">stories</Link></li>
          <li><Link to="/members">members</Link></li>
        </ul>
      </SidebarVisible>
    </SidebarComponent>
  );
}

export default Sidebar;

const SidebarComponent = styled.aside`
  position: fixed;
  top: 0;
  left: -1px;
  height: 100vh;
  width: ${sidebarEnterWidth};
  font-size: 1rem;
  /* border: 1px solid gray; */

  div{
    height: 100%;
  }

  .sidebar.shrinked{
    width: 0;
    background-color: violet;
    /* width: ${sidebarEnterWidth}; */
    transition: all 0.5s;
  }
`;

const SidebarVisible = styled.div`
  width: ${sidebarVisibleWidth};
  overflow-x: hidden;
  transition: all 0.5s;
  background-color: gray;
  z-index: 5;
`;
