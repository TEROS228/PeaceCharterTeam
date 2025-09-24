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
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Аренда парусных катамаранов</h1>
            <p className="hero-subtitle">Насладитесь роскошью морских путешествий на Пхукете</p>
            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-primary">Забронировать сейчас</Link>
              <a href="#fleet" className="btn btn-secondary">Наш флот</a>
              <Link to="/routes" className="btn btn-secondary">Маршруты</Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down"></i>
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