import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import ContainerIndex from './container_index';
import ContainerCategories from './container_categories';

const Container = styled.div`
  padding-top: 78px;
  margin-left: 23%;
`;

function FrontContainer() {
  const { path } = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route exact path={`${path}`} component={ContainerIndex} />
        <Route path={`${path}/categories/:id`} component={ContainerCategories} />
        <Redirect from={`${path}*`} to="/index" />
      </Switch>
    </Container>
  );
}

export default FrontContainer;
