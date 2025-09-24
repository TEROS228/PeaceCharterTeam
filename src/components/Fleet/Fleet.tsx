import React from 'react'
import { Link } from 'react-router-dom'

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="fleet">
      <div className="container">
        <div className="section-header">
          <h2>Наш флот</h2>
          <p>Выберите идеальный катамаран для вашего приключения</p>
        </div>
        <div className="fleet-grid">
          <div className="yacht-card">
            <div className="yacht-image">
              <img src="./images/fountaine-pajot/thumbs/main.jpg" alt="Fountaine Pajot" />
              <div className="yacht-overlay">
                <span className="yacht-price">от 40,000 THB</span>
                <Link to="/fountaine-pajot" className="btn-back-custom">Подробнее</Link>
              </div>
            </div>
            <div className="yacht-info">
              <h3>Astrea 42</h3>
              <p className="yacht-specs">4 каюты • 10 гостей • 2024 год</p>
              <ul className="yacht-features">
                <li><i className="fas fa-users"></i> До 10 человек</li>
                <li><i className="fas fa-bed"></i> 4 комфортабельные каюты</li>
                <li><i className="fas fa-tv"></i> Современное оборудование</li>
              </ul>
              <div className="yacht-buttons">
                <Link to="/booking" className="btn-back-custom">Забронировать</Link>
              </div>
            </div>
          </div>

          <div className="yacht-card">
            <div className="yacht-image">
              <img src="./images/lucia-40/thumbs/main.jpg" alt="Lucia 40" />
              <div className="yacht-overlay">
                <span className="yacht-price">от 40,000 THB</span>
                <Link to="/lucia-40" className="btn-back-custom">Подробнее</Link>
              </div>
            </div>
            <div className="yacht-info">
              <h3>Lucia 40</h3>
              <p className="yacht-specs">4 каюты • 12 гостей • 2019 год</p>
              <ul className="yacht-features">
                <li><i className="fas fa-users"></i> До 12 человек</li>
                <li><i className="fas fa-bed"></i> 4 просторные каюты</li>
                <li><i className="fas fa-utensils"></i> Полная кухня</li>
              </ul>
              <div className="yacht-buttons">
                <Link to="/booking" className="btn-back-custom">Забронировать</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet