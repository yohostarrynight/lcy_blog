import React from 'react';
import styled from 'styled-components';
import HeaderLeftNav from './header_left_nav';
import HeaderRightNav from './header_right_nav';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-sizing: border-box;
  z-index: 2;
  width: 100%;
  padding: 10px 40px 10px 20px;
  background: #1976d2;
  color: #fff;
`;

function BackgroundHeader() {
  return (
    <Head>
      <HeaderLeftNav />
      <HeaderRightNav />
    </Head>
  );
}

export default BackgroundHeader;
