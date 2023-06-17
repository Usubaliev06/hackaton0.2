import React from "react";
import "./style.css";

const Main = () => {
  return (
    <div className="container">
      <div className="main-user-wrap">
        <div className="main-user-block">
          <div className="main-user-photo"></div>
          <div className="main-user-info">
            <h2 className="main-user-info-name">
              Иванов Иван Иванович
            </h2>
            <p className="main-user-info-addres">
              г. Бишкек, Ленинский район, ул. Ю. Абдрахманова, 157
            </p>
            <p className="main-user-info-age">
              1953 г. р.
            </p>
            <p className="main-user-info-health">
             Пенсионер по старости, инвалид 1 группы по здоровью
            </p>
          </div>
        </div>
        <div className="main-privileges-wrap">
          <h3 className="main-privileges-header">
            Вы можете получить следующие льготы:
          </h3>
          <p className="main-housing-benefits-header">
              Жилищные льготы:
          </p>
          <div className="main-housing-benefits-wrap">
            <div className="main-housing-benefits-block">
              <div className="main-housing-benefits-text-wrap">              
                <p className="main-housing-benefits-text">
                  Компенсация коммунальных услуг
                </p>
                <span className="main-info-complite">
                  Вы получаете это пособие
                </span>
              </div>
              <div className="main-btn-block">
                <a href="/detail" className="main-btn-more">Подробнее</a>
              </div>
            </div>
          </div>

          
          <div className="main-housing-benefits-wrap">
            <div className="main-housing-benefits-block">
              <div className="main-housing-benefits-text-wrap">              
                <p className="main-housing-benefits-text">
                  Обеспечение жилым помещением
                </p>
                <span className="main-info-try">
                  Вы можете получать это пособие
                </span>
              </div>
              <div className="main-btn-block">
                <a href="/detail" className="main-btn-more">Подробнее</a>
                <a href="/form" className="main-btn-application">Подать заявление на получение</a>
              </div>
            </div>
          </div>


          <div className="main-housing-benefits-wrap">
            <div className="main-housing-benefits-block">
              <div className="main-housing-benefits-text-wrap">              
                <p className="main-housing-benefits-text">
                  Компенсация коммунальных услуг
                </p>
                <span className="main-info-pending">
                  Ваше заявление на рассмотрении
                </span>
              </div>
              <div className="main-btn-block">
                <a href="/detail" className="main-btn-more">Подробнее</a>
              </div>
            </div>
          </div>

          <div className="main-housing-benefits-wrap">
            <div className="main-housing-benefits-block">
              <div className="main-housing-benefits-text-wrap">              
                <p className="main-housing-benefits-text">
                  Семейная ипотека
                </p>
                <span className="main-info-broken">
                  Ваше заявление отклонено
                </span>
              </div>
              <div className="main-btn-block">
                <a href="/detail" className="main-btn-more">Подробнее</a>
                <a href="/form" className="main-btn-application">Подать заявление на получение</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
