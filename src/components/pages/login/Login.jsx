import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../store/dataSlise";
// import { useParams } from "react-router-dom";

const Login = () => {
  const data = useSelector((state) => state.data.data);
  const { status } = useSelector((state) => state.data.userData);
  const dispatch = useDispatch();

  const [inn, setInn] = useState("");
  const [innText, setInnText] = useState("login-form-header");
  const [errorText, setErrorText] = useState("login-form-subheader");
  const [input, setInput] = useState("login-form-field");

  const inputChange = (e) => {
    setInn(e.target.value);
    setInnText("login-form-header");
    setErrorText("login-form-subheader");
    setInput("login-form-field");
  };

  const getUser = () => {
    dispatch(getData(inn));
    console.log(data);
    console.log(status);
    if (data === null) {
      // getUser();
      console.log("error");
    } else if (data === "Entity User whit ID: '11004199001231' is not found.") {
      setInnText("login-header-error");
      setErrorText("text-error");
      setInput("form-error");
    } else {
      window.location.assign(`/main/${inn}`);
    }
  };

  const validation = () => {
    const isOnlyLetters = /^[A-Za-z]+$/.test(inn);
    const isValidLength = inn.length === 14;
  
    if (isOnlyLetters || !isValidLength) {
      setInnText("login-header-error");
      setErrorText("text-error");
      setInput("form-error");
    } else {
      getUser();
    }
  };
  // console.log(data.fullName);
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
