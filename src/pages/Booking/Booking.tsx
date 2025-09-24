import React, { useState, useEffect } from 'react';

const Booking: React.FC = () => {
  const [selectedYacht, setSelectedYacht] = useState<string>('');
  const [bookingMethod, setBookingMethod] = useState<'whatsapp' | 'email' | null>(null);

  // Прокручиваем в начало страницы при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleYachtSelect = (yacht: string) => {
    setSelectedYacht(yacht);
  };

  const handleBookingMethod = (method: 'whatsapp' | 'email') => {
    setBookingMethod(method);
  };

  const getWhatsAppMessage = () => {
    const yachtName = selectedYacht === 'fountaine-pajot' ? 'Fountaine Pajot Astrea 42' : 'Lucia 40';
    return `Здравствуйте! Я хочу забронировать катамаран ${yachtName}.`;
  };

  return (
    <div className="booking-page">
      <div className="container">
        {/* Кнопка "Назад" */}
        <div className="row mb-4">
          <div className="col-12">
            <button 
              className="btn-back-custom"
              onClick={() => window.history.back()}
            >
              <i className="bi bi-arrow-left-circle" style={{ fontSize: '1.5rem' }}></i>
              <span>Назад</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="booking-hero">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="booking-title">Бронирование катамарана</h1>
              <p className="lead">Выберите подходящий вариант и оставьте заявку. Мы свяжемся с вами в течение 15 минут для подтверждения бронирования.</p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="bi bi-calendar-check" style={{fontSize: '5rem', opacity: 0.9}}></i>
            </div>
          </div>
        </div>

        {/* Катамараны для бронирования */}
        <h2 className="mb-4">Наш флот</h2>
        <div className="yachts-grid">
          {/* Fountaine Pajot */}
          <div className="yacht-card">
            <img src="/images/fountaine-pajot/thumbs/main.jpg" className="card-img-top" alt="Fountaine Pajot" />
            <div className="card-body">
              <h5 className="card-title">Astrea 42</h5>
              <p className="card-text">Роскошный катамаран для незабываемого отдыха на Пхукете</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="price">от 40,000 THB / день</span>
                <span className="badge bg-success">Доступен</span>
              </div>
              <button 
                className="btn-back-custom" 
                data-bs-toggle="modal" 
                data-bs-target="#bookingModal"
                onClick={() => handleYachtSelect('fountaine-pajot')}
              >
                <i className="bi bi-calendar-check me-2"></i>Забронировать
              </button>
            </div>
          </div>

          {/* Lucia 40 */}
          <div className="yacht-card">
            <img src="/images/lucia-40/thumbs/main.jpg" className="card-img-top" alt="Lucia 40" />
            <div className="card-body">
              <h5 className="card-title">Lucia 40</h5>
              <p className="card-text">Просторный и комфортабельный катамаран для большой компании</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="price">от 40,000 THB / день</span>
                <span className="badge bg-success">Доступен</span>
              </div>
              <button 
                className="btn-back-custom" 
                data-bs-toggle="modal" 
                data-bs-target="#bookingModal"
                onClick={() => handleYachtSelect('lucia-40')}
              >
                <i className="bi bi-calendar-check me-2"></i>Забронировать
              </button>
            </div>
          </div>
        </div>

        {/* Модальное окно бронирования */}
        <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="bookingModalLabel">
                  Бронирование {selectedYacht === 'fountaine-pajot' ? 'Fountaine Pajot Astrea 42' : 'Lucia 40'}
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="text-muted mb-4">Выберите удобный способ связи для бронирования выбранного катамарана</p>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div 
                      className={`booking-option ${bookingMethod === 'whatsapp' ? 'active' : ''}`}
                      onClick={() => handleBookingMethod('whatsapp')}
                    >
                      <div className="text-center">
                        <i className="bi bi-whatsapp option-icon"></i>
                        <h5 className="option-title">Написать в WhatsApp</h5>
                        <p className="option-desc">Мгновенная связь с менеджером для уточнения деталей</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div 
                      className={`booking-option ${bookingMethod === 'email' ? 'active' : ''}`}
                      onClick={() => handleBookingMethod('email')}
                    >
                      <div className="text-center">
                        <i className="bi bi-envelope option-icon"></i>
                        <h5 className="option-title">Отправить заявку</h5>
                        <p className="option-desc">Заполните форму и мы свяжемся с вами в течение часа</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Форма для email */}
                {bookingMethod === 'email' && (
                  <div id="emailForm">
                    <h6 className="mb-3">Заполните данные для бронирования</h6>
                    <form
                      id="bookingForm"
                      action="https://formsubmit.co/first5500@gmail.com"
                      method="POST"
                      autoComplete="off"
                    >
                      <input type="hidden" id="selectedYacht" name="yacht" value={selectedYacht} />
                      <input type="hidden" name="_subject" value={`Запрос на бронирование: ${selectedYacht === 'fountaine-pajot' ? 'Fountaine Pajot Astrea 42' : 'Lucia 40'}`} />
                      <input type="hidden" name="_template" value="table" />
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label">Ваше имя</label>
                          <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="phone" className="form-label">Телефон</label>
                          <input type="tel" className="form-control" id="phone" name="phone" required />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="startDate" className="form-label">Дата начала</label>
                          <input type="date" className="form-control" id="startDate" name="startDate" required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="endDate" className="form-label">Дата окончания</label>
                          <input type="date" className="form-control" id="endDate" name="endDate" required />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Дополнительная информация</label>
                        <textarea className="form-control" id="message" name="message" rows={3}></textarea>
                      </div>
                      <button type="submit" className="btn-back-custom">
                        <i className="bi bi-send me-2"></i>Отправить заявку
                      </button>
                    </form>
                  </div>
                )}
                
                {/* Кнопка WhatsApp */}
                {bookingMethod === 'whatsapp' && (
                  <div id="whatsappBtn" style={{textAlign: 'center'}}>
                    <a 
                      href={`https://wa.me/66854741566?text=${encodeURIComponent(getWhatsAppMessage())}`} 
                      className="btn-back-custom" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i>Написать в WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;