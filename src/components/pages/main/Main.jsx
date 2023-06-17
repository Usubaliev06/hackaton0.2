import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../store/dataSlise";
import { useParams } from "react-router";

const Main = () => {
  const data = useSelector((state) => state.data.data);
  const { status } = useSelector((state) => state.data.userData);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getData(params.inn));
    // console.log(status);
    console.log(data);
    // console.log(params.inn);
  }, [params.inn]);

  const one = [];
  const two = [];
  const thri = [];

  data?.benefits?.map((e) => {
    if (e.category === "Жилищные льготы") {
      one.push(e);
    } else if (e.category === "Социальные льготы") {
      two.push(e);
    } else if (e.category === "Транспортные льготы") {
      thri.push(e);
    }
  });

  console.log(one);

  return (
    <div className="container">
      <div className="main-user-wrap">
        <div className="main-user-block">
        
          <img  className="main-user-photo" src={data?.imageUrl} alt="" />
          <div className="main-user-info">
            <h2 className="main-user-info-name">{data?.fullName}</h2>
            <p className="main-user-info-addres">
            {data?.address}
            </p>
            <p className="main-user-info-age">{data?.birthDate}</p>
            <p className="main-user-info-health">
              Пенсионер по старости, инвалид 1 группы по здоровью
            </p>
          </div>
        </div>

        <div className="main-privileges-wrap">
          <h3 className="main-privileges-header">
            Вы можете получить следующие льготы:
          </h3>

          <p className="main-housing-benefits-header">Жилищные льготы:</p>
          {one.map((e, idx) => {
            if (e.status === "Ready") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-try">
                        Вы можете получать это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Successfully") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-complite">
                        Вы получаете это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Rejected") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-broken">
                        Ваше заявление отклонено
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Pending") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-pending">
                        Ваше заявление на рассмотрении
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Handle other cases if necessary
            }
          })}

          <p className="main-housing-benefits-header">Налоговые льготы:</p>
          {two.map((e, idx) => {
            if (e.status === "Ready") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-try">
                        Вы можете получать это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Successfully") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-complite">
                        Вы получаете это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Rejected") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-broken">
                        Ваше заявление отклонено
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Pending") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-pending">
                        Ваше заявление на рассмотрении
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Handle other cases if necessary
            }
          })}

          <p className="main-housing-benefits-header">Медицинские льготы:</p>
          {thri.map((e, idx) => {
            if (e.status === "Ready") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-try">
                        Вы можете получать это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Successfully") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-complite">
                        Вы получаете это пособие
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Rejected") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-broken">
                        Ваше заявление отклонено
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                      <a className="main-btn-application">
                        Подать заявление на получение
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else if (e.status === "Pending") {
              return (
                <div key={idx} className="main-housing-benefits-wrap">
                  <div className="main-housing-benefits-block">
                    <div className="main-housing-benefits-text-wrap">
                      <p className="main-housing-benefits-text">{e.name}</p>
                      <span className="main-info-pending">
                        Ваше заявление на рассмотрении
                      </span>
                    </div>
                    <div className="main-btn-block">
                      <a className="main-btn-more">Подробнее</a>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Handle other cases if necessary
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
