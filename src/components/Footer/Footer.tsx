import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Peace Charter</h4>
            <p>Премиальная аренда катамаранов на Пхукете</p>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>Пхукет, Таиланд</p>
            <p>+66 (85) 474-1566</p>
          </div>
          <div className="footer-section">
            <h4>Мы в соцсетях</h4>
            <div className="social-links">
              <a href="https://instagram.com/peacecharterteam/" target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/PeaceCharterTeam" target="_blank" rel="noopener">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/66854741566" target="_blank" rel="noopener">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Peace Charter. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer