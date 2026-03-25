import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from 'react-router-dom'
import AppointmentPage from './pages/Appointment/AppointmentPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import PaymentsPage from "./pages/Payments/PaymentsPage"
import ServicesPage from './pages/Services/ServicesPage'
import ContactPage from './pages/Contact/ContactPage'
import TeamsPage from './pages/Teams/TeamsPage'
import HomePage from './pages/Home/HomePage'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/payments" element={<PaymentsPage />} />
    </Routes>
  )
}

export default App