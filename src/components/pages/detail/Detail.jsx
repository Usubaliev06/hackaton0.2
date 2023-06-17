import React from 'react'
import './style.css'

const Detail = () => {
  return (
    <div className="container">
        <div className="detail-wrap">
            <a href="/main" className="btn-back">
                <span className="btn-back-icon"></span> Назад</a>
            <h2 className="detail-header">
                Пенсия по старости
            </h2>
            <p className="detail-subheader">
                Закон о социальном страховании с. 32 ч. 3
            </p>
            <p className="detail-text">
                Пожилые люди, не имеющие право получить пенсию. Это те, у кого отсутствует страховой стаж, либо его недостаточно для получения пенсии. При этом возраст должен быть следующим: у мужчин – 65 лет, женщин – 60 лет (матерей-героинь – 55 лет). Здесь важно отметить, что размер пособия не будет превышать базовую часть пенсии. Напомним, с 1 октября 2018 года базовая часть пенсии составляет 1880 сомов;
            </p>
        </div>
    </div>
  )
}

export default Detail;