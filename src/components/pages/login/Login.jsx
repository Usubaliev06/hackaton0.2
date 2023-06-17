import React, { useState, useEffect } from "react";
import "./style.css";

const Login = () => {
  const [inn, setInn] = useState("");
  const [innText, setInnText] = useState("login-form-header");
  const [errorText, setErrorText] = useState("login-form-subheader");
  const [input, setInput] = useState("login-form-field");

  const inputChange =(e)=>{
    setInn(e.target.value)
    setInnText("login-form-header");
    setErrorText("login-form-subheader");
    setInput("login-form-field");
  }

  const validation = () => {
    if (inn.length < 14 || inn.length > 14) {
      setInnText("login-header-error");
      setErrorText("text-error");
      setInput("form-error");
    } 
  };

  return (
    <div className="container header-height">
      <h1 className="login-header">
        Введите ваш ИНН и вставьте флешку из ЦОНа
      </h1>
      <div className="login-form-block">
        <p className={innText}>ИНН</p>
        <input
          type="text"
          placeholder="1234567890123"
          className={input}
          value={inn}
          onChange={inputChange}
        />
        <p className={errorText}>Не удалось найти этот ИНН</p>
        <button onClick={validation} className="login-form-button">
          Войти
        </button>
        <a href="" className="login-form-link">
          Не удается войти?
        </a>
      </div>
    </div>
  );
};

export default Login;
