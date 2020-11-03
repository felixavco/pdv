import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import { paths, ROLES } from './config';

import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));
const UserDetails = lazy(() => import('./pages/Users/Details'));
const UserForm = lazy(() => import('./pages/Users/Form'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/Products/Details'));
const ProductForm = lazy(() => import('./pages/Products/Form'));

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

            <ProtectedRoute
              exact
              role={ROLES.ADMIN}
              path={paths.users()}
              component={Users}
            />

            <ProtectedRoute
              exact
              path={paths.users(':id')}
              component={UserDetails}
            />

            <ProtectedRoute
              exact
              role={ROLES.ADMIN}
              path={paths.userForm}
              component={UserForm}
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

            <ProtectedRoute
              exact
              role={ROLES.ADMIN}
              path={paths.productForm}
              component={ProductForm}
            />
          </Suspense>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
