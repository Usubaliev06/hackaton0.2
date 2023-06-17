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
        <label for="email">ИНН</label>
        <input type="text" placeholder="1234567890123" name="email" />
      </div>
    </div>
  );
}

export default Login;
