import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {

  // State para inicar sesion
  const [usuario, guardarUsuario] = useState({
    email:'',
    password:''
  });

  // Extraer de usuario
  const { email, password } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario, 
      [e.target.name]: e.target.value
    })
  }

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    // Validar campos vacios

    // Pasarlo al acction


  }


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-">
            <input 
              type="submit" 
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"/>
          </div>

        </form>

        <Link to="/nueva-cuenta" className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
