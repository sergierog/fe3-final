import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import {
  ContextGlobal,
  initialState,
  useContextGlobal,
} from "./Components/utils/ContextProvider";

function App() {
  const { theme, setTheme, odontologos } = useContextGlobal();
  const handleChangeTheme = () => {
    if (theme === initialState.themes.light) {
      setTheme(initialState.themes.dark);
    } else {
      setTheme(initialState.themes.light);
    }
  };
  return (
    <>
      <div className={theme.className}>
        <ContextGlobal.Provider value={{theme, handleChangeTheme, odontologos}}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:odontologoid" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>

        <Footer />
        </ContextGlobal.Provider>
      </div>
    </>
  );
}

export default App;
