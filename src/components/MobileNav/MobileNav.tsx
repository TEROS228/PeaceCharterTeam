import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNav.css';

const MobileNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      icon: 'bi-house',
      label: 'Главная',
      active: location.pathname === '/'
    },
    {
      path: '/routes',
      icon: 'bi-geo-alt',
      label: 'Маршруты',
      active: location.pathname.startsWith('/routes')
    },
    {
      path: '/booking',
      icon: 'bi-calendar-check',
      label: 'Бронирование',
      active: location.pathname === '/booking'
    },
    {
      path: '/fountaine-pajot',
      icon: 'bi-water',
      label: 'Флот',
      active: location.pathname.includes('fountaine-pajot') || location.pathname.includes('lucia-40')
    }
  ];

  return (
    <nav className="mobile-nav d-md-none">
      <div className="d-flex justify-content-around">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-item touch-feedback ${item.active ? 'active' : ''}`}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
