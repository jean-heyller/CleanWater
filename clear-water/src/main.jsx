import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recycling from "./pages/recycling/Recycling";
import Home from "./pages/home/Home.jsx";
import WaterShortage from "./pages/water-shortage/WaterShortage.jsx";
import { OceanGarbage } from "./pages/garbageProblem/OceanGarbage.jsx";
import { PhysicsScene } from "./pages/solution-garbage/PhysicsScene.jsx";
import Table from "./component/table/Table.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ocean" element={<OceanGarbage />} />
          <Route path="/water-shortage" element={<WaterShortage />} />
          <Route path="/solutionGarbage" element={<PhysicsScene />} />
          <Route path="/table" element={<Table/>} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
