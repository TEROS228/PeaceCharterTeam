import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Booking from './pages/Booking/Booking'
import FountainePajot from './pages/YachtPages/FountainePajot/FountainePajot'
import Lucia40 from './pages/YachtPages/Lucia40/Lucia40'
import RoutesPage from './pages/Routes/Routes'
import RouteDetail from './pages/Routes/RouteDetail/RouteDetail'
import './styles/globals.css'

function App() {
  useEffect(() => {
    // Обрабатываем перенаправления с 404.html
    const l = window.location;
    if (l.search) {
      const q: { [key: string]: string } = {};
      l.search.slice(1).split('&').forEach(function(v) {
        const a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q['/']) {
        window.history.replaceState(null, '', l.pathname.slice(0, -1) + q['/'] + l.hash);
      }
    }
  }, []);

  return (
    <Router basename="/PeaceCharterTeam">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        <Route path="/fountaine-pajot" element={<Layout><FountainePajot /></Layout>} />                                                                         
        <Route path="/lucia-40" element={<Layout><Lucia40 /></Layout>} />
        <Route path="/routes" element={<Layout><RoutesPage /></Layout>} />
        <Route path="/routes/:id" element={<Layout><RouteDetail /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
