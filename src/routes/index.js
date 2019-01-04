import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/Footer';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
