import React from 'react';
import './FoodMenu.css';

const FoodMenu: React.FC = () => {
  return (
    <section id="food-menu" className="food-menu">
      <div className="container">
        <div className="section-header">
          <h2>Меню питания</h2>
          <p>Наслаждайтесь вкусными блюдами во время вашего морского приключения</p>
        </div>

        <div className="menu-grid">
          {/* Меню 1 - Морское */}
          <div className="menu-card menu-card-ocean">
            <div className="menu-card-header">
              <div className="menu-card-badge">Морское меню</div>
              <div className="menu-card-price">500 THB<span>/чел</span></div>
            </div>
            <div className="menu-card-image">
              <img src="/images/seafood.jpg" alt="Морское меню" />
            </div>
            <div className="menu-card-content">
              <h3 className="menu-card-title">Свежие морепродукты</h3>
              <p className="menu-card-description">Классические блюда из свежих морепродуктов</p>
              <ul className="menu-card-items">
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-bread-slice"></i>
                  </div>
                  <span>Брускетта с сыром и рыбой</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <span>Салат овощной</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-fish"></i>
                  </div>
                  <span>Сибас в духовке</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <span>Жареный рис с овощами</span>
                </li>
              </ul>
            </div>
            <div className="menu-card-footer">
              <button className="menu-card-btn">Выбрать меню</button>
            </div>
          </div>

          {/* Меню 2 - Популярное */}
          <div className="menu-card menu-card-popular featured">
            <div className="menu-card-header">
              <div className="menu-card-badge popular">Популярное</div>
              <div className="menu-card-price">500 THB<span>/чел</span></div>
            </div>
            <div className="menu-card-image">
              <img src="/images/popular.jpg" alt="Популярное меню" />
            </div>
            <div className="menu-card-content">
              <h3 className="menu-card-title">Избранное меню</h3>
              <p className="menu-card-description">Самое популярное меню среди наших гостей</p>
              <ul className="menu-card-items">
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-cheese"></i>
                  </div>
                  <span>Брускетта с сыром и рыбой</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-shrimp"></i>
                  </div>
                  <span>Овощной салат с креветками</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-drumstick-bite"></i>
                  </div>
                  <span>Крылышки запеченные в духовке</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-potato"></i>
                  </div>
                  <span>Картофель по домашнему</span>
                </li>
              </ul>
            </div>
            <div className="menu-card-footer">
              <button className="menu-card-btn">Выбрать меню</button>
            </div>
          </div>

          {/* Меню 3 - Тайское */}
          <div className="menu-card menu-card-thai">
            <div className="menu-card-header">
              <div className="menu-card-badge thai">Тайское меню</div>
              <div className="menu-card-price">500 THB<span>/чел</span></div>
            </div>
            <div className="menu-card-image">
              <img src="/images/thai.jpg" alt="Тайское меню" />
            </div>
            <div className="menu-card-content">
              <h3 className="menu-card-title">Аутентичная кухня</h3>
              <p className="menu-card-description">Традиционные тайские блюда с характерными вкусами</p>
              <ul className="menu-card-items">
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <span>Брускетта с сыром и рыбой</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-apple-alt"></i>
                  </div>
                  <span>Папайя салат</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-mortar-pestle"></i>
                  </div>
                  <span>Том ям</span>
                </li>
                <li className="menu-card-item">
                  <div className="menu-card-item-icon">
                    <i className="fas fa-utensil-spoon"></i>
                  </div>
                  <span>Жареный рис с курицей</span>
                </li>
              </ul>
            </div>
            <div className="menu-card-footer">
              <button className="menu-card-btn">Выбрать меню</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
