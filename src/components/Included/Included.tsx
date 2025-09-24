import React from 'react'

const Included: React.FC = () => {
  return (
    <section id="included" className="included">
      <div className="container">
        <div className="section-header">
          <h2>Что входит в стоимость</h2>
          <p>Всё для идеального дня на катамаране</p>
        </div>
        <div className="included-banners">
          <div className="banner-card cyan">
            <span className="banner-icon"><i className="fas fa-user-tie"></i></span>
            <div className="banner-content">
              <h3>Капитан и экипаж</h3>
              <p>Профессиональный капитан и команда, заботящиеся о вашем отдыхе</p>
            </div>
          </div>

          <div className="banner-card pink">
            <span className="banner-icon"><i className="fas fa-swimmer"></i></span>
            <div className="banner-content">
              <h3>Снаряжение для снорклинга</h3>
              <p>Маски, трубки, жилеты для всех гостей</p>
            </div>
          </div>

          <div className="banner-card green">
            <span className="banner-icon"><i className="fas fa-gas-pump"></i></span>
            <div className="banner-content">
              <h3>Топливо</h3>
              <p>Полная стоимость топлива включена</p>
            </div>
          </div>

          <div className="banner-card orange">
            <span className="banner-icon"><i className="fas fa-music"></i></span>
            <div className="banner-content">
              <h3>Музыка на борту</h3>
              <p>Аудиосистема, возможность подключить свои устройства</p>
            </div>
          </div>

          <div className="banner-card blue">
            <span className="banner-icon"><i className="fas fa-calendar-day"></i></span>
            <div className="banner-content">
              <h3>Бортовой сервис</h3>
              <p>Внимание к деталям и забота о вашем комфорте</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Included