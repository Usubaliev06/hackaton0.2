import React from 'react';
import './style.css'

const Login = () => {
  return (
    <div className="container">
      <h1 className="login-header">
        Введите ваш ИНН и вставьте флешку из ЦОНа
      </h1>
      <div className="login-form-block">
        <p className="login-form-header">ИНН</p>
        <input type="text" placeholder="1234567890123" className="login-form-field" />
        <p className="login-form-subheader">Не удалось найти этот ИНН</p>
        <button className="login-form-button">Войти</button>
        <a href="" className="login-form-link">Не удается войти?</a>
      </div>
    </div>
  );
}

export default Login;
