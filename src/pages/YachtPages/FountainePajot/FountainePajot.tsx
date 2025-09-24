import React, { useState, useEffect } from 'react';
import { Yacht } from '../../../types';

const FountainePajot: React.FC = () => {
  const [mainImage, setMainImage] = useState('./images/fountaine-pajot/thumbs/main.jpg');
  const [activeThumb, setActiveThumb] = useState('main');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Прокручиваем в начало страницы при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yachtData: Yacht = {
    id: 1,
    name: "Fountaine Pajot Astrea 42",
    price: 40000,
    capacity: 10,
    cabins: 4,
    year: 2024,
    image: "./images/fountaine-pajot/thumbs/main.jpg",
    available: true,
    description: "Astrea 42 — этот катамаран сочетает в себе все что нужно, чтобы обеспечить безупречное удовольствие от пребывания на борту. 42-футовый парусный катамаран отличается обилием естественного света, энергичными линиями, элегантными жилыми помещениями и непревзойденным уровнем комфорта.",
    specs: "Длина: 12.58 м, Ширина: 7.20 м, Осадка: 1.25 м"
  };

  const images = [
    { id: 'main', src: './images/fountaine-pajot/thumbs/main.jpg', alt: 'Главный вид' },
    { id: 'interior1', src: './images/fountaine-pajot/thumbs/interior1.jpg', alt: 'Интерьер 1' },
    { id: 'interior2', src: './images/fountaine-pajot/thumbs/interior2.jpg', alt: 'Интерьер 2' },
    { id: 'deck1', src: './images/fountaine-pajot/thumbs/deck1.jpg', alt: 'Палуба 1' },
    { id: 'deck2', src: './images/fountaine-pajot/thumbs/deck2.jpg', alt: 'Палуба 2' },
    { id: 'cabin1', src: './images/fountaine-pajot/thumbs/cabin1.jpg', alt: 'Каюта 1' },
    { id: 'cabin2', src: './images/fountaine-pajot/thumbs/cabin2.jpg', alt: 'Каюта 2' },
    { id: 'kitchen', src: './images/fountaine-pajot/thumbs/kitchen.jpg', alt: 'Кухня' },
    { id: 'bathroom', src: './images/fountaine-pajot/thumbs/bathroom.jpg', alt: 'Ванная' },
    { id: 'view', src: './images/fountaine-pajot/thumbs/view.jpg', alt: 'Вид с палубы' }
  ];

  const croppedImages = ['kitchen', 'bathroom', 'view'];

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
              <p className="yacht-subtitle">Роскошный катамаран для незабываемого отдыха на Пхукете</p>
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
                <span className="spec-value">12.58 м</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Ширина</span>
                <span className="spec-value">7.20 м</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Осадка</span>
                <span className="spec-value">1.25 м</span>
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
              <p>
                Просторные каюты, современное оснащение и внимание к деталям делают Fountaine Pajot 
                идеальным выбором для тех, кто ценит качество и стиль. Солнечные панели, генератор, 
                кондиционер и современная навигационная система обеспечат ваш комфорт и безопасность.
              </p>
            </div>

            {/* Особенности */}
            <div className="row g-3 mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="col-12">
                <h3 className="section-title">Ключевые особенности</h3>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-lightning-charge"></i>
                  <h5>Солнечные панели</h5>
                  <p className="text-muted">Экологичная энергия</p>
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
                  <i className="bi bi-file-minus-fill"></i>
                  <h5>Холодильник</h5>
                  <p className="text-muted">Несколько просторных холодильников</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-card">
                  <i className="bi bi-speaker"></i>
                  <h5>Аудиосистема</h5>
                  <p className="text-muted">Премиум звук</p>
                </div>
              </div>
            </div>

            {/* Дополнительные фичи */}
            <div className="mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="section-title">Оснащение</h3>
              <div className="text-center">
                <span className="feature-badge"><i className="bi bi-sun me-2"></i>Места на палубе для загара и в тени</span>
                <span className="feature-badge"><i className="bi bi-compass me-2"></i>Обустроенный флайбридж для обзора на 360°</span>
                <span className="feature-badge"><i className="bi bi-water me-2"></i>Всё для купания и снорклинга</span>
                <span className="feature-badge"><i className="bi bi-egg-fried me-2"></i>Большая обустроенная кухня</span>
                <span className="feature-badge"><i className="bi bi-house-door me-2"></i>4 комфортабельные каюты</span>
                <span className="feature-badge"><i className="bi bi-droplet me-2"></i>Белье и полотенца</span>
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

export default FountainePajot;