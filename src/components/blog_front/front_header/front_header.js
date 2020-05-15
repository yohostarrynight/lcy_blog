import React from 'react';
import styled from 'styled-components';
import HeaderLeftFont from './header_left_font';
import HeaderRightNav from './header_right_nav';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 2;
  width: 100%;
  padding: 15px 40px 15px 20px;
  color: #555;
  background: #fff;
`;

function FrontHeader() {
  return (
    <Head>
      <HeaderLeftFont />
      <HeaderRightNav />
    </Head>
  );
}

export default FrontHeader;
