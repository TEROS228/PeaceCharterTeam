import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Route {
  id: number;
  name: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

const Routes: React.FC = () => {
  const routes: Route[] = [
    {
      id: 1,
      name: "1 День. Пхукет - Острова Кхай -Райнг Яй - Нака",
      duration: "8 часов",
      image: "/images/routes/koh-hai.jpg",
      description: "Острова Кхай, Райнг Яй и Нака с белоснежными пляжами, кристально чистой водой и жемчужными фермами.",
      highlights: ["ОСТРОВ КХАЙ", "Райнг Яй", "Нака", "Жемчужные фермы"]
    },
    {
      id: 2,
      name: "1 День. Пхукет - Пханг Нга (остров Хонг - остров Дж. Бонда)",
      duration: "10 часов",
      image: "/images/routes/phang-nga-bay.jpg",
      description: "Остров Джеймса Бонда (Ко Тапу) и остров Хонг с известняковыми скалами, кристально чистыми водами и живописными лагунами.",
      highlights: ["Остров Джеймса Бонда", "Остров Хонг", "Залив Пханг Нга", "Каякинг"]
    },
    {
      id: 3,
      name: "1 День. Пхукет - Остров Хонг (Краби)",
      duration: "10 часов",
      image: "/images/routes/koh-hong-krabi.jpg",
      description: "Остров Хонг в провинции Краби с живописной лагуной, белоснежным пляжем Пелай и тропической растительностью.",
      highlights: ["Остров Хонг", "Пляж Пелай", "Скрытая лагуна", "Снорклинг"]
    },
    {
      id: 4,
      name: "2 Дня. Пхукет - остров Рача Яй",
      duration: "2 дня",
      image: "/images/routes/racha-island.jpg",
      description: "Остров Рача Яй с белоснежными пляжами, коралловыми рифами и тропической растительностью, напоминающий кадры из фильма 'Баунти'.",
      highlights: ["Остров Рача Яй", "Коралловые рифы", "Снорклинг"]
    },
    {
      id: 5,
      name: "2 Дня. Пхукет - Краби (Чикен Айленд + Ао Нанг + Ралей бич)",
      duration: "2 дня",
      image: "/images/routes/krabi-bay.jpg",
      description: "Провинция Краби с островом Чикен Айленд, пляжем Ао Нанг и знаменитым Ралей бич.",
      highlights: ["Чикен Айленд", "Ао Нанг", "Ралей бич",]
    },
    {
      id: 6,
      name: "2 Дня. Пхукет - остров Пи Пи (бухта Майя бэй фильм 'Пляж' + Пхи Пхи дон)",
      duration: "2 дня",
      image: "/images/routes/phi-phi-islands.jpg",
      description: "Острова Пхи Пхи с бухтой Майя Бэй из фильма 'Пляж' и островом Пхи-Пхи-Дон с белоснежными пляжами и джунглями.",
      highlights: ["Майя Бэй", "Пхи-Пхи-Дон", "Фильм 'Пляж'", "Вечеринки"]
    },
    {
      id: 7,
      name: "3 Дня. Остров Ко Рок",
      duration: "3 дня",
      image: "/images/routes/koh-rok.jpg",
      description: "Уединенные острова Рок и Ха в провинции Транг с нетронутым подводным миром и спокойной атмосферой.",
      highlights: ["Остров Ко Рок", "Остров Ко Ха", "Снорклинг", "Уединение"]
    },
    {
      id: 8,
      name: "3 Дня. Симиланские острова",
      duration: "3 дня",
      image: "/images/routes/similan-islands.jpg",
      description: "Симиланские острова - национальный парк Таиланда, входящий в десятку лучших мест для дайвинга в мире.",
      highlights: ["Симиланские острова", "Китовая акула", "Национальный парк"]
    },
    {
      id: 9,
      name: "3 Дня. Остров Ланта",
      duration: "3 дня",
      image: "/images/routes/koh-lanta.jpg",
      description: "Остров Ланта - четвертый по величине остров Таиланда с уютной атмосферой, живописными закатами и песчаными пляжами.",
      highlights: ["Остров Ланта", "Закаты", "Уют", "Релакс"]
    },
    {
      id: 10,
      name: "7 Дней. Большое путешествие по Андаманскому морю",
      duration: "7 дней",
      image: "/images/routes/7-day-adventure.jpg",
      description: "Эксклюзивное 7-дневное путешествие по самым красивым островам Андаманского моря. Посетите залив Пханг Нга, острова Пхи-Пхи, Рок, Рача Яй и многие другие уникальные места.",
      highlights: ["Пханг Нга", "Пхи-Пхи", "Острова Рок", "Рача Яй", "Рыбалка", "Снорклинг"]
    }
  ];

  // Прокручиваем в начало страницы при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="routes-page">
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
        <div className="routes-hero">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="routes-title">Маршруты катамаранов</h1>
              <p className="lead">Выберите идеальный маршрут для вашего морского приключения на Пхукете</p>
            </div>
            <div className="col-lg-4 text-center">
              <i className="bi bi-geo-alt" style={{fontSize: '5rem', opacity: 0.9}}></i>
            </div>
          </div>
        </div>

        {/* Маршруты */}
        <div className="routes-grid">
          {routes.map((route) => (
            <div key={route.id} className="route-card">
              <div className="route-image">
                <img src={route.image} alt={route.name} />
              </div>
              <div className="route-content">
                <h3 className="route-name">{route.name}</h3>
                <p className="route-description">{route.description}</p>
                <div className="route-details">
                  <div className="route-detail">
                    <i className="bi bi-people"></i>
                    <span>До 10-12 человек</span>
                  </div>
                </div>
                <div className="route-highlights">
                  {route.highlights.slice(0, 2).map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link to={`/routes/${route.id}`} className="btn-back-custom">
                  <i className="bi bi-eye me-2"></i>Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routes;
