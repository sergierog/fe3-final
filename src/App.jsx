
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


function App() {
  return (
    <>
      
          <Navbar/>
          
          
            <Routes>
              <Route path = "/" element={<Home/>}/>
              <Route path = "/detail" element={<Detail/>}/>
              <Route path = "/detail/:odontologoid" element={<Detail/>}/>
              <Route path = "/contact" element={<Contact/>}/>
              <Route path = "/favs" element={<Favs/>}/>
            </Routes>
          
          <Footer/>
      
      </>
  );
}

export default App;
