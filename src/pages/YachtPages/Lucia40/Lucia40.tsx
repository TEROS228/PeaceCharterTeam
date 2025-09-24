import React, { useState, useEffect } from 'react';
import { Yacht } from '../../../types';

const Lucia40: React.FC = () => {
  const [mainImage, setMainImage] = useState('./images/lucia-40/thumbs/main.jpg');
  const [activeThumb, setActiveThumb] = useState('main');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Прокручиваем в начало страницы при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yachtData: Yacht = {
    id: 2,
    name: "Lucia 40",
    price: 40000,
    capacity: 12,
    cabins: 4,
    year: 2019,
    image: "./images/lucia-40/thumbs/main.jpg",
    available: true,
    description: "Lucia 40 — идеальный катамаран для тех, кто ценит комфорт и простор. Этот 40-футовый парусный катамаран предлагает превосходное сочетание производительности и роскоши, делая его идеальным выбором для семейного отдыха или путешествия с друзьями.",
    specs: "Длина: 12.00 м, Ширина: 6.50 м, Осадка: 1.1 м"
  };

  const images = [
    { id: 'main', src: './images/lucia-40/thumbs/main.jpg', alt: 'Главный вид' },
    { id: 'interior1', src: './images/lucia-40/thumbs/interior1.jpg', alt: 'Интерьер 1' },
    { id: 'interior2', src: './images/lucia-40/thumbs/interior2.jpg', alt: 'Интерьер 2' },
    { id: 'deck1', src: './images/lucia-40/thumbs/deck1.jpg', alt: 'Палуба 1' },
    { id: 'deck2', src: './images/lucia-40/thumbs/deck2.jpg', alt: 'Палуба 2' },
    { id: 'cabin1', src: './images/lucia-40/thumbs/cabin1.jpg', alt: 'Каюта 1' },
    { id: 'cabin2', src: './images/lucia-40/thumbs/cabin2.jpg', alt: 'Каюта 2' },
    { id: 'kitchen', src: './images/lucia-40/thumbs/kitchen.jpg', alt: 'Кухня' },
    { id: 'bathroom', src: './images/lucia-40/thumbs/bathroom.jpg', alt: 'Ванная' },
    { id: 'view', src: './images/lucia-40/thumbs/view.jpg', alt: 'Вид с палубы' }
  ];

  const croppedImages = ['cabin1', 'cabin2', 'kitchen', 'bathroom', 'view'];

  const handleImageClick = (imageSrc: string, imageId: string) => {
    setMainImage(imageSrc);
    setActiveThumb(imageId);
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const isCropped = croppedImages.includes(activeThumb);

  return (
    <div className="yacht-page">
      <div className="container" style={{ paddingTop: '100px' }}>
        {/* Hero Section */}
        <div className="hero-section animate-fade-in">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <button onClick={() => window.history.back()} className="btn-back-custom">
                <i className="bi bi-arrow-left-circle" style={{ fontSize: '1.5rem' }}></i>
                <span>Назад</span>
              </button>
              <h1 className="yacht-title">{yachtData.name}</h1>
              <p className="yacht-subtitle">Идеальный катамаран для семейного отдыха и путешествий с друзьями</p>
              <div className="yacht-price">{yachtData.price.toLocaleString()} THB / день</div>
              
              <a href="/booking" className="btn-booking">
                <i className="bi bi-calendar-check me-2"></i>Забронировать онлайн
              </a>
            </div>
            
            <div className="col-lg-6">
              <img 
                src={mainImage} 
                className={`main-image ${isCropped ? 'cropped' : ''}`}
                alt={yachtData.name}
                onClick={() => openModal(mainImage)}
                style={{ cursor: 'pointer' }}
              />
              
              <div className="gallery-thumbs">
                {images.map((image) => (
                  <div 
                    key={image.id}
                    className={`thumb-item ${activeThumb === image.id ? 'active' : ''}`}
                    onClick={() => handleImageClick(image.src, image.id)}
                  >
                    <img 
                      src={image.src} 
                      className={`thumb-img ${croppedImages.includes(image.id) ? 'cropped' : ''}`}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="row g-4 mt-4">
          {/* Характеристики */}
          <div className="col-lg-4">
            <div className="specs-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="mb-4"><i className="bi bi-list-check me-2"></i>Технические характеристики</h4>
              <div className="spec-item">
                <span className="spec-label">Год выпуска</span>
                <span className="spec-value">{yachtData.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Количество кают</span>
                <span className="spec-value">{yachtData.cabins}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Максимум гостей</span>
                <span className="spec-value">{yachtData.capacity}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Длина</span>
                <span className="spec-value">12.00 м</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Ширина</span>
                <span className="spec-value">6.50 м</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Осадка</span>
                <span className="spec-value">1.1 м</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Цена с экипажем</span>
                <span className="spec-value" style={{ color: 'var(--secondary)', fontWeight: '700' }}>
                  От {yachtData.price.toLocaleString()} THB/день
                </span>
              </div>
              
              <div className="text-center mt-4">
                <a href="/booking" className="btn btn-primary-custom btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>Забронировать
                </a>
              </div>
            </div>
          </div>

          {/* Описание и особенности */}
          <div className="col-lg-8">
            <div className="description-box animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="section-title">Описание яхты</h3>
              <p>{yachtData.description}</p>
            </div>

            {/* Особенности */}
            <div className="row g-3 mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="col-12">
                <h3 className="section-title">Ключевые особенности</h3>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-people"></i>
                  <h5>Вместимость</h5>
                  <p className="text-muted">До 12 гостей</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-snow"></i>
                  <h5>Кондиционер</h5>
                  <p className="text-muted">Во всех помещениях</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-brightness-high"></i>
                  <h5>Светлый салон</h5>
                  <p className="text-muted">Панорамное остекление</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-compass"></i>
                  <h5>Навигация</h5>
                  <p className="text-muted">Современное оборудование</p>
                </div>
              </div>
            </div>

            {/* Дополнительные фичи */}
            <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="section-title">Оснащение</h3>
              <div className="text-center">
                <span className="feature-badge"><i className="bi bi-sun me-2"></i>Просторная палуба для загара и отдыха</span>
                <span className="feature-badge"><i className="bi bi-compass me-2"></i>Удобный флайбридж для управления</span>
                <span className="feature-badge"><i className="bi bi-water me-2"></i>Все необходимое для купания и снорклинга</span>
                <span className="feature-badge"><i className="bi bi-egg-fried me-2"></i>Полноценная кухня с оборудованием</span>
                <span className="feature-badge"><i className="bi bi-house-door me-2"></i>4 комфортабельные каюты</span>
                <span className="feature-badge"><i className="bi bi-droplet me-2"></i>Опреснитель воды</span>
                <span className="feature-badge"><i className="bi bi-wind me-2"></i>Генератор</span>
                <span className="feature-badge"><i className="bi bi-shield-check me-2"></i>Снаряжение для рыбалки</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для просмотра изображений */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            <img src={modalImage} alt="Увеличенное изображение" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lucia40;