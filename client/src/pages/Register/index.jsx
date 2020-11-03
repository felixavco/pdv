import React, { useState } from 'react';
import { userActions } from '../../store/user/user.actions';

function Register() {
  const [state, setState] = useState({
    store: '',
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: '',
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    userActions.register(state);
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
