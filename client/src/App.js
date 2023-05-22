import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { Nav } from "./components/Nav";
import { Detail } from "./components/Detail";
import { Error } from "./components/Error";
import { About } from "./components/About";
import { Favorites } from "./components/Favorites";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav /> : null}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
