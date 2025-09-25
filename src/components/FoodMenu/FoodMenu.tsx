import React from 'react'
import './FoodMenu.scss'

const FoodMenu: React.FC = () => {
  const menus = [
    {
      id: 1,
      name: "Средиземноморское меню",
      price: "500 THB/чел",
      featured: false,
      description: "Легкие и свежие блюда европейской кухни",
      items: [
        { icon: "🥖", text: "Брускетта с сыром и рыбой" },
        { icon: "🥗", text: "Салат овощной с зеленью" },
        { icon: "🐟", text: "Сибас запеченный в духовке" },
        { icon: "🍚", text: "Жареный рис с овощами" },
        { icon: "🍰", text: "Фруктовый десерт" }
      ]
    },
    {
      id: 2,
      name: "Тайский деликатес",
      price: "500 THB/чел",
      featured: true,
      description: "Аутентичные тайские вкусы с морепродуктами",
      items: [
        { icon: "🧀", text: "Брускетта с сыром и рыбой" },
        { icon: "🦐", text: "Салат с тигровыми креветками" },
        { icon: "🍗", text: "Куриные крылышки в медовом соусе" },
        { icon: "🥔", text: "Картофель по-домашнему" },
        { icon: "🍍", text: "Свежие тропические фрукты" }
      ]
    },
    {
      id: 3,
      name: "Экзотик микс",
      price: "500 THB/чел",
      featured: false,
      description: "Смесь азиатских и европейских вкусов",
      items: [
        { icon: "🍽️", text: "Брускетта с сыром и рыбой" },
        { icon: "🍈", text: "Салат из свежей папайи" },
        { icon: "🍲", text: "Том ям с морепродуктами" },
        { icon: "🍛", text: "Жареный рис с курицей" },
        { icon: "🥭", text: "Манго стики с кокосом" }
      ]
    }
  ];

  return (
    <section id="food-menu" className="food-menu-section">
      <div className="container">
        <div className="section-header">
          <h2>Меню питания</h2>
          <p>Наслаждайтесь вкусными блюдами от нашего шеф-повара во время вашего морского приключения</p>
        </div>
        
        <div className="menu-grid">
          {menus.map((menu) => (
            <div 
              key={menu.id} 
              className={`menu-card ${menu.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={menu.id * 100}
            >
              {menu.featured && (
                <div className="popular-badge">
                  <i className="fas fa-crown"></i>
                  Популярное
                </div>
              )}
              
              <div className="menu-header">
                <div className="menu-title">
                  <h3>{menu.name}</h3>
                  <p className="menu-description">{menu.description}</p>
                </div>
                <div className="menu-price">
                  <span className="price">{menu.price}</span>
                  <span className="price-note">на человека</span>
                </div>
              </div>
              
              <div className="menu-content">
                <div className="menu-items">
                  {menu.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <span className="menu-item-icon">{item.icon}</span>
                      <span className="menu-item-text">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="menu-footer">
                  <button className="btn-select-menu">
                    <i className="fas fa-utensils"></i>
                    Выбрать это меню
                  </button>
                  <div className="menu-note">
                    <i className="fas fa-info-circle"></i>
                    Возможна корректировка по предварительному запросу
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-additional-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-user-chef"></i>
            </div>
            <div className="info-content">
              <h4>Шеф-повар на борту</h4>
              <p>Все блюда готовятся свежими на борту нашим профессиональным шеф-поваром</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-fish"></i>
            </div>
            <div className="info-content">
              <h4>Свежие морепродукты</h4>
              <p>Рыба и морепродукты закупаются ежедневно у местных рыбаков</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <div className="info-content">
              <h4>Сезонные продукты</h4>
              <p>Используем только свежие сезонные овощи и фрукты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodMenu