import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SidebarItem from './sidebar_item';

const Sidebar = styled.div`
  position: fixed;
  top: 44px;
  bottom: 0;
  left: ${props => (props.sidebarshow ? '0' : '-250px')};
  width: 250px;
  padding-top: 10px;
  background-color: #EFF2F7;
  border-right: 1px solid #ddd;
  transition: left .25s ease;
`;

function BackgroundSidebar(props) {
  return (
    <Sidebar sidebarshow={props.sidebarshow}>
      <SidebarItem />
    </Sidebar>
  );
}

const mapStateToProps = state => {
  return {
    sidebarshow: state.sidebarShowReducer.sidebarshow
  };
};

export default connect(mapStateToProps)(BackgroundSidebar);
