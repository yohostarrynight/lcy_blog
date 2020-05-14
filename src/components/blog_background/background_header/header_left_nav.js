import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReorderIcon from '@material-ui/icons/Reorder';
import { changeSidebarShow } from '../../../redux/actions/sidebar_show_actions';

const LeftNav = styled.div`
  display: flex;
`;
const LeftNavIcon = styled(ReorderIcon)`
  cursor: pointer;
`;
const Title = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;
`;

function HeaderLeftNav(props) {
  const handleChangeSidebarShow = () => {
    props.ChangeSidebarShow(!props.sidebarshow);
  };
  return (
    <LeftNav>
      <LeftNavIcon onClick={handleChangeSidebarShow} />
      <Title>欢迎来到LCYBLOG</Title>
    </LeftNav>
  );
}

const mapStateToProps = state => {
  return {
    sidebarshow: state.sidebarShowReducer.sidebarshow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeSidebarShow(sidebarshow) {
      dispatch(changeSidebarShow(sidebarshow));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeftNav);
