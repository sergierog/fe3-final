import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContextGlobal();
  
  return (
        <nav className={theme.className}>
        <div>
          <h1><span>D</span>H Odonto</h1>
        </div>
          <div>
          <Link to="/" className={theme.className}>Home </Link>
          <Link to="/contact" className={theme.className}>Contact </Link>
          <Link to="/favs" className={theme.className}>Favs </Link>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button onClick={handleChangeTheme} className="darkButton">&#127770;</button>
          </div>
        </nav>
       
    
  );
};

export default Navbar;
