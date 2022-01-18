import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Calltaxi from "./pages/Calltexi";
import CheckBook from "./pages/CheckBook";
import InsertInfoPet from "./pages/InsertInfoPet";
import MungMission from "./pages/MungMission";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/Calltaxi"> Calltaxi </Link>
        <Link to="/CheckBook"> CheckBook </Link>
        <Link to="/InsertInfoPet"> InsertInfoPet </Link>
        <Link to="/MungMission"> MungMission </Link>
        <Link to="/Profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Calltaxi" element={<Calltaxi />} />
        <Route path="/CheckBook" element={<CheckBook />} />
        <Route path="/InsertInfoPet" element={<InsertInfoPet />} />
        <Route path="/MungMission" element={<MungMission />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
