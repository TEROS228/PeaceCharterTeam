import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Свяжитесь с нами</h2>
          <p>Готовы к незабываемому приключению?</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp</h4>
                <p>+66 (85) 474-1566</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>first5500@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact