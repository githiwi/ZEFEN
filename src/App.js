import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Categories from "./component/Categories/Categories";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Instruments from "./component/Instruments/Instruments";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Instruments" element={<Instruments />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<div> 404 page not found </div>} />
      </Routes>
    </div>
  );
}

export default App;
