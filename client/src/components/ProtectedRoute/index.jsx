import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { paths } from '../../config';

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useSelector((store) => store.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={paths.login} />
      }
    />
  );
}

export default ProtectedRoute;
