import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Booking from './pages/Booking/Booking'
import FountainePajot from './pages/YachtPages/FountainePajot/FountainePajot'
import Lucia40 from './pages/YachtPages/Lucia40/Lucia40'
import RoutesPage from './pages/Routes/Routes'
import RouteDetail from './pages/Routes/RouteDetail/RouteDetail'
import './styles/globals.css'

function App() {
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