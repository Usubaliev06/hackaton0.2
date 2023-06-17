import React from 'react';
import './style.css'

const Form = () => {
  return (
    <div className="container">
      <div className="form-block">
        <div className="form-wrap">
          <div className="form-info-block">
            <h3 className="form-header">
              Заявление на получение пособия
            </h3>
            <p className="form-subheader">
              Компенсация коммунальных услуг 
            </p>
          </div>

          <div className="form-card-block">
            <div className="form-card-wrap">
              <span className="form-card-icon-access"></span>
              <div className="form-card-info-wrap">
                <p className="form-card-info-subheader-access">
                  Документ найден!
                </p>
                <h2 className="form-card-info-header">
                  Заключение Медико-социальной экспертной комиссии (МСЭК) об установлении группы инвалидности
                </h2>
                <p className="form-card-info-time">
                  Выдано: 23 мая 2023, ЦСМ №6, Заключение 34634 
                </p>
              </div>
            </div>

            <div className="form-card-wrap">
              <span className="form-card-icon-access"></span>
              <div className="form-card-info-wrap">
                <p className="form-card-info-subheader-access">
                  Документ найден!
                </p>
                <h2 className="form-card-info-header">
                  Заключение Медико-социальной экспертной комиссии (МСЭК) об установлении группы инвалидности
                </h2>
                <p className="form-card-info-time">
                  Выдано: 23 мая 2023, ЦСМ №6, Заключение 34634 
                </p>
              </div>
            </div>

            <div className="form-card-wrap">
              <span className="form-card-icon-access"></span>
              <div className="form-card-info-wrap">
                <p className="form-card-info-subheader-access">
                  Документ найден!
                </p>
                <h2 className="form-card-info-header">
                  Паспорт гражданина Кыргызской Республики              
                </h2>
                <p className="form-card-info-time">
                  Выдано: 1 декабря 2020, ЦОН Октябрьского района, Приказ 5258714              
                </p>
              </div>
            </div>

            <div className="form-card-wrap">
              <span className="form-card-icon-denied"></span>
              <div className="form-card-info-wrap">
                <p className="form-card-info-subheader-denied">
                  Документ не найден!
                </p>
                <h2 className="form-card-info-header">
                  Паспорт гражданина Кыргызской Республики              
                </h2>
                <a href="#" className="form-card-info-link">
                  Помощь в решении проблемы
                </a>
              </div>
            </div>

            <div className="form-card-wrap">
              <span className="form-card-icon-denied"></span>
              <div className="form-card-info-wrap">
                <p className="form-card-info-subheader-denied">
                  Документ не найден!
                </p>
                <h2 className="form-card-info-header">
                  Справки о заработной плате за любые 60 месяцев работы подряд до 01.01.1996 г.;
                </h2>
                <a href="#" className="form-card-info-link">
                  Помощь в решении проблемы
                </a>
              </div>
            </div>
          </div>

          <div className="form-card-btn-block">
            <a href="/main" className="btn-cancel">Отмена</a>
            <button className="btn-added">Подать заявление</button>
          </div>
        </div>

        <div className="access-wrap">
          <div className="access-block">
            <div className="access-header">
              Ваше заявление успешно отправлено!
            </div>
            <span className="access-icon"></span>
            <div className="access-text">
              Мы отправим решение на вашу почту ivanov53@mail.ru в течение 5 рабочих дней и отправим уведомление на ваш телефон +995 555 123 456
            </div>
            <a href="#" className="access-btn-back">Вернуться на главную</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
