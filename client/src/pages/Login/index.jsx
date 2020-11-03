import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { paths } from '../../config';
import { authActions } from '../../store/auth/auth.actions';

function Login() {
  const { isAuth } = useSelector((store) => store.auth);
  const { push } = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      push(paths.dashboard);
    }
  }, [isAuth, push]);

  if (isAuth) {
    return null;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    authActions.login(state);
  };

  const onChangeHandler = ({ target }) => {
    const { value, name } = target;
    setState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={onChangeHandler}
          name='email'
          type='email'
          placeholder='Correo'
        />
        <input
          onChange={onChangeHandler}
          name='password'
          type='password'
          placeholder='Contraseña'
        />
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
