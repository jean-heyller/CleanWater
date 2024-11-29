import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recycling from './pages/recycling/Recycling';
import  Home  from './pages/home/Home.jsx'
import WaterShortage from './pages/water-shortage/WaterShortage.jsx'
import { OceanGarbage } from './pages/garbageProblem/OceanGarbage.jsx'
import { PhysicsScene } from './pages/solution-garbage/PhysicsScene.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/home" element={< Home />} />
        <Route path='/ocean' element={<OceanGarbage />} />
        <Route path="/water-shortage" element={<WaterShortage/>}/>
        <Route path='/solutionGarbage' element={<PhysicsScene/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
