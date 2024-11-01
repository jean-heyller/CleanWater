import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { World } from './pages/world/World.jsx'
import Recycling from './pages/recycling/Recycling';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/world" element={<World />} />
        <Route path="/recycling" element={<Recycling />} />
      </Routes>
    </Router>
  </StrictMode>,
)
