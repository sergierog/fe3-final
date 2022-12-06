import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";

const Card = ({ od}) => {

  
   
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
   const odontologos = JSON.parse(localStorage.getItem("odontologos")|| '[]')
   const odontologo =({
    id: od.id,
    name:od.name,
    username: od.username
   })
   odontologos.push(odontologo)
   localStorage.setItem("odontologos", JSON.stringify(odontologos))
  };

  return (
    <div className="card">
      <Link to={"/detail/" + od.id}>
        <h2>{od.name}</h2>
      </Link>
      <img src="../../public/images/doctor.jpg" alt="" />
      <h4>{od.username}</h4>
      <p>ID {od.id}</p>

      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={(e) => {
                addFav()  
                                  
        }}
        className="favButton"
      >
        Add fav
      </button>
    </div>
  );
};

export default Card;
