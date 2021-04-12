import React, { useState } from "react";
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

  // State para inicar sesion
  const [usuario, guardarUsuario] = useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
  });

  // Extraer de usuario
  const { nombre, email, password, confirmar } = usuario;

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

    // Password minimo 6 caracteres

    // Dos passwords iguales

    // Pasarlo al acction


  }


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>
        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="noombre">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              id="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

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

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input 
              type="password" 
              name="confirmar" 
              id="confirmar"
              placeholder="Repite Tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-">
            <input 
              type="submit" 
              className="btn btn-primario btn-block"
              value="Registrarme"/>
          </div>

        </form>

        <Link to="/" className="enlace-cuenta">
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
