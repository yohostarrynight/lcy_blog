import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import IndexPage from './blog_front/index_page';
import LoginPage from './blog_login/login_page';
import BackgroundPage from './blog_background/background_page';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/background" component={BackgroundPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
