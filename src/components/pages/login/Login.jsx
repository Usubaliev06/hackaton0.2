import React from 'react';
import './style.css'

const Login = () => {
  return (
    <div className="container">
      <h1 className="login-header">
        Портал получения пособий
      </h1>
      <h2 className="login-subheader">
        Введите ваш ИНН и вставьте флешку из ЦОНа
      </h2>
      <div className="login-form-block">
        <p className="login-form-header">ИНН</p>
        <input type="text" placeholder="1234567890123" className="login-form-field" />
        <p className="login-form-subheader">Не удалось найти этот ИНН</p>
      </div>
    </div>
  );
}

export default Login;
