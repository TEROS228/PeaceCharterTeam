import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../components/Calendar/Calendar'
import Fleet from '../../components/Fleet/Fleet'
import FoodMenu from '../../components/FoodMenu/FoodMenu'
import Included from '../../components/Included/Included'
import Contact from '../../components/Contact/Contact'

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1>Аренда парусных катамаранов на Пхукете</h1>
              <p className="lead">Насладитесь роскошью морских путешествий по Андаманскому морю. Профессиональные капитаны, комфортабельные катамараны и незабываемые впечатления ждут вас.</p>
              <div className="hero-buttons">
                <Link to="/booking" className="btn btn-primary">
                  <i className="bi bi-calendar-check me-2"></i>
                  Забронировать сейчас
                </Link>
                <a href="#fleet" className="btn btn-secondary">
                  <i className="bi bi-water me-2"></i>
                  Наш флот
                </a>
                <Link to="/routes" className="btn btn-secondary">
                  <i className="bi bi-geo-alt me-2"></i>
                  Маршруты
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="hero-image">
                <i className="bi bi-water" style={{fontSize: '8rem', opacity: 0.8, color: 'rgba(255, 255, 255, 0.3)'}}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Calendar />
      <Fleet />
      <FoodMenu />
      <Included />
      <Contact />
    </div>
  )
}

export default Home
