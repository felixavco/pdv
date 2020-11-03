import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import { paths } from './config';

import Layout from './components/Layout';
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense fallback='loading...'>
            <Route exact path={paths.login} component={Login} />
            <Route exact path={paths.register} component={Register} />
          </Suspense>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
