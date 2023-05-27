import "./App.css";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./components/Home/Home";
import { Landing } from "./components/Landing/Landing";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";
import { Error } from "./components/Error/Error";
import { About } from "./components/About/About";
import { Favorites } from "./components/Favorites/Favorites";
import { Create } from "./components/Create/Create";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    await axios
      .post(`http://localhost:3001/users/`, userData)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
