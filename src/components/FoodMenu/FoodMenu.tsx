import React from 'react'

const FoodMenu: React.FC = () => {
  return (
    <section id="food-menu" className="food-menu">
      <div className="container">
        <div className="section-header">
          <h2>Меню питания</h2>
          <p>Наслаждайтесь вкусными блюдами во время вашего морского приключения</p>
        </div>
        
        <div className="menu-grid">
          {/* Меню 1 */}
          <div className="menu-card">
          <div className="menu-header">
            <h3>Меню 1</h3>
            <div className="menu-price">500 THB/чел</div>
          </div>
          <div className="menu-content">
            <ul className="menu-items">
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-bread-slice"></i></div>
                <span className="menu-item-text">Брускетта с сыром и рыбой</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-leaf"></i></div>
                <span className="menu-item-text">Салат овощной</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-fish"></i></div>
                <span className="menu-item-text">Сибас в духовке</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-utensils"></i></div>
                <span className="menu-item-text">Жареный рис с овощами</span>
              </li>
            </ul>
          </div>
          </div>

          {/* Меню 2 */}
          <div className="menu-card featured">
          <div className="menu-header">
            <h3>Меню 2</h3>
            <div className="menu-price">500 THB/чел</div>
          </div>
          <div className="menu-content">
            <ul className="menu-items">
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-cheese"></i></div>
                <span className="menu-item-text">Брускетта с сыром и рыбой</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-shrimp"></i></div>
                <span className="menu-item-text">Овощной салат с креветками</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-drumstick-bite"></i></div>
                <span className="menu-item-text">Крылышки запеченные в духовке</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-potato"></i></div>
                <span className="menu-item-text">Картофель по домашнему</span>
              </li>
            </ul>
          </div>
          </div>

          {/* Меню 3 */}
          <div className="menu-card">
          <div className="menu-header">
            <h3>Меню 3</h3>
            <div className="menu-price">500 THB/чел</div>
          </div>
          <div className="menu-content">
            <ul className="menu-items">
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-utensils"></i></div>
                <span className="menu-item-text">Брускетта с сыром и рыбой</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-apple-alt"></i></div>
                <span className="menu-item-text">Папайя салат</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-mortar-pestle"></i></div>
                <span className="menu-item-text">Том ям</span>
              </li>
              <li className="menu-item">
                <div className="menu-item-icon"><i className="fas fa-utensil-spoon"></i></div>
                <span className="menu-item-text">Жареный рис с курицей</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodMenu