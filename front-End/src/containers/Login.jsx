import React from "react";
//STYLE
import "../assets/styles/components/Login.scss";
//REDUX
import {useDispatch} from 'react-redux'
import {loginAction} from '../redux/authDuck'
const Login = () => {
    const dispatch = useDispatch()
    const handleLogin = (e) => {
      dispatch(loginAction(e.currentTarget.value))
    }

  return (
    <div className="Login">
      <div className="Login__background">
        <div>
          <img
            src="https://mitienda.moda/img/logo.c752bf8f.png"
            alt="logo_store"
          />
        </div>
        <div className='Login__background__info'>
          <h2>Ingresa el número de teléfono de tu asesora independiente.</h2>
        </div>
        <div>
          <input type="number" placeholder='Telefono' onChange={handleLogin}/> 
        </div>
      </div>
    </div>
  );
};

export default Login;
