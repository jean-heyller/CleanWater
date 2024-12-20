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
import Form from "./component/form/Form.jsx";
import { Questionq1 } from "./pages/quiz/Question1.jsx";
import Question2 from "./pages/quiz/Question2.jsx";
import Question3 from "./pages/quiz/Question3.jsx";
import Question4 from "./pages/quiz/Question4.jsx";
import Question5 from "./pages/quiz/Question5.jsx";
import Question6 from "./pages/quiz/Question6.jsx";
import Video from "./component/video/Video.jsx";
import Handle from "./component/handle/Handle.jsx";


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
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/handle" element={<Handle></Handle>} />
          <Route path="/question1" element={<Questionq1></Questionq1>} />
          <Route path="/question2" element={<Question2></Question2>} />
          <Route path="/question3" element={<Question3></Question3>} />
          <Route path="/question4" element={<Question4></Question4>} />
          <Route path="/question5" element={<Question5></Question5>} />
          <Route path="/question6" element={<Question6></Question6>} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
