import React from 'react'

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="calendar">
      <div className="container">
        <div className="section-header">
          <h2>Календарь цен</h2>
          <p>Выберите месяц и посмотрите стоимость аренды катамаранов на один день без ночевки</p>
        </div>
        <div className="calendar-table-wrapper">
            <table className="calendar-table">
            <thead>
              <tr>
                <th>Месяц</th>
                <th>
                  <div className="catamaran-head">
                    <img src="images/catamaran1.jpg" alt="Fountaine Pajot" className="catamaran-thumb" />
                    <span>Astrea 42</span>
                  </div>
                </th>
                <th>
                  <div className="catamaran-head">
                    <img src="images/catamaran2.jpg" alt="Lucia 40" className="catamaran-thumb" />
                    <span>Lucia 40</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Январь</td><td className="price-cell">50,000 <span className="thb">THB</span></td><td className="price-cell">50,000 <span className="thb">THB</span></td></tr>
              <tr><td>Февраль</td><td className="price-cell">45,000 <span className="thb">THB</span></td><td className="price-cell">45,000 <span className="thb">THB</span></td></tr>
              <tr><td>Март</td><td className="price-cell">45,000 <span className="thb">THB</span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Апрель</td><td className="price-cell">40,000 <span className="thb">THB</span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Май</td><td className="price-cell">40,000 <span className="thb">THB</span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Июнь</td><td className="price-cell">Не работает <span className="thb"></span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Июль</td><td className="price-cell">Не работает <span className="thb"></span></td><td className="price-cell">Не работает <span className="thb"></span></td></tr>
              <tr><td>Август</td><td className="price-cell">Не работает <span className="thb"></span></td><td className="price-cell">Не работает <span className="thb"></span></td></tr>
              <tr><td>Сентябрь</td><td className="price-cell">Не работает <span className="thb"></span></td><td className="price-cell">Не работает <span className="thb"></span></td></tr>
              <tr><td>Октябрь</td><td className="price-cell">40,000 <span className="thb">THB</span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Ноябрь</td><td className="price-cell">40,000 <span className="thb">THB</span></td><td className="price-cell">40,000 <span className="thb">THB</span></td></tr>
              <tr><td>Декабрь</td><td className="price-cell highlight">45,000 <span className="thb">THB</span></td><td className="price-cell highlight">45,000 <span className="thb">THB</span></td></tr>
            </tbody>
          </table>
          </div>
      </div>
    </section>
  )
}

export default Calendar