import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/ContextProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 const{theme, handleChangeTheme} = useContextGlobal()
  return (
    <nav className={ theme.className}>
     <Link to="/">Home </Link>
						<Link to="/contact">Contact </Link>
						<Link to="/favs">Favs </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar