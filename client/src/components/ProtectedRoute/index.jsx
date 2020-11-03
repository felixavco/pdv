import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { paths, ROLES } from '../../config';
import { useAuthUser } from '../hooks';

function ProtectedRoute({ component: Component, role = ROLES.USER, ...rest }) {
  const { isAuth, hasRole } = useAuthUser(role);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && hasRole ? (
          <Component {...props} />
        ) : (
          <Redirect to={paths.login} />
        )
      }
    />
  );
}

export default ProtectedRoute;
