import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Categories from "./component/Categories/Categories";
import Header from "./component/Header/Header";
import Instruments from "./component/Instruments/Instruments";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element= {<App/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Instruments" element={<Instruments/>}/>
        <Route path= "/About" element={<About/>} />


      
      </Routes>
    </div>
  );
}

export default App;
