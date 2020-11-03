import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import { paths } from './config';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));
const UserDetails = lazy(() => import('./pages/Users/Details'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/Products/Details'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense fallback='loading...'>
            <Route exact path={paths.login} component={Login} />
            <Route exact path={paths.register} component={Register} />
            <ProtectedRoute
              exact
              path={paths.dashboard}
              component={Dashboard}
            />
            <ProtectedRoute exact path={paths.users()} component={Users} />
            <ProtectedRoute
              exact
              path={paths.users(':id')}
              component={UserDetails}
            />
            <ProtectedRoute
              exact
              path={paths.products()}
              component={Products}
            />
            <ProtectedRoute
              exact
              path={paths.products(':id')}
              component={ProductDetails}
            />
          </Suspense>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
