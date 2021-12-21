import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apicall from "./Components/Apicall";
import Postman from "./Components/Postman";
// import FoodApi from "./Components/FoodApi";
import Airlines from "./Components/Airlines";
import NavBar from "./Components/NavBar";
import CountryData from "./Components/CountryData";

function App() {
  return (
    <div className="App">
      {/* <Apicall/> */}
      {/* <Postman/> */}
      {/* <Airlines /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Postman />} />
          <Route path="/airlines" element={<Airlines />} />
          <Route path="/Api" element={<Apicall />} />
          <Route path="/Country" element={<CountryData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
