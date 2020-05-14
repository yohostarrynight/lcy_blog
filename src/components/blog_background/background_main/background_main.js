import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainBreadcrumbs from './main_breadcrumbs';
import ManageUser from './manage_user/manage_user';
import AddUser from './manage_user/add_user';
import ManageData from './manage_data/manage_data';
import UpdateData from './manage_data/update_data';

const Main = styled.div`
  margin-left: ${props => (props.sidebarshow ? '250px' : '0')};
  padding: 57px 10px 0 10px;
  transition: margin-left .25s ease;
`;

function BackgroundMain(props) {
  const { path } = useRouteMatch();
  return (
    <Main sidebarshow={props.sidebarshow}>
      <MainBreadcrumbs />
      <Switch>
        <Route path={`${path}/manageuser`} component={ManageUser} />
        <Route path={`${path}/adduser`} component={AddUser} />
        <Route path={`${path}/managedata`} component={ManageData} />
        <Route path={`${path}/updatedata/:id`} component={UpdateData} />
        <Redirect from={`${path}/*`} to="/background" />
      </Switch>
    </Main>
  );
}

const mapStateToProps = state => {
  return {
    sidebarshow: state.sidebarShowReducer.sidebarshow
  };
};

export default connect(mapStateToProps)(BackgroundMain);
