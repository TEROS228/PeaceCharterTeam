import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Если мы не на главной странице, переходим на главную с якорем
    if (location.pathname !== '/') {
      // Переходим на главную страницу
      navigate('/');
      // После перехода прокручиваем к нужной секции
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      // Если мы на главной странице, просто прокручиваем к секции
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { href: '#hero', label: 'Главная', icon: 'bi-house' },
    { href: '#fleet', label: 'Катамараны', icon: 'bi-water' },
    { href: '/routes', label: 'Маршруты', icon: 'bi-geo-alt', isRoute: true },
    { href: '#food-menu', label: 'Меню', icon: 'bi-cup-hot' },
    { href: '#contact', label: 'Контакты', icon: 'bi-telephone' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div 
          className="logo" 
          onClick={() => handleNavClick('#hero')}
          style={{ cursor: 'pointer' }}
        >
          <i className="bi bi-water" style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}></i>                                                                 
          <span>Peace Charter</span>
        </div>
        
        {/* Десктопная навигация */}
        <nav className="nav-desktop">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isRoute ? (
                  <Link 
                    to={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Мобильная навигация */}
        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <div key={index} className="mobile-menu-item">
                {item.isRoute ? (
                  <Link 
                    to={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="mobile-menu-link"
                  >
                    <i className={`bi ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="mobile-menu-link"
                  >
                    <i className={`bi ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div 
          className={`burger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
