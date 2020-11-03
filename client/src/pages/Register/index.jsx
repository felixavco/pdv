import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { paths } from '../../config';
import { useAuthUser } from '../../components/hooks';
import { authActions } from '../../store/auth/auth.actions';

function Register() {
  const { isAuth } = useAuthUser();
  const { push } = useHistory();
  const [state, setState] = useState({
    store: '',
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
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
    authActions.register(state);
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
          name='store'
          type='text'
          placeholder='Ingrese el nombre de la tienda'
        />
        <input
          onChange={onChangeHandler}
          name='firstName'
          type='text'
          placeholder='Primer nombre'
        />
        <input
          onChange={onChangeHandler}
          name='middleName'
          type='text'
          placeholder='Segundo nombre'
        />
        <input
          onChange={onChangeHandler}
          name='lastName'
          type='text'
          placeholder='Apellido'
        />
        <input
          onChange={onChangeHandler}
          name='secondLastName'
          type='text'
          placeholder='Segundo apellido'
        />
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
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
