import * as React from 'react';
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";
import Doctor from "../images/doctor.jpg";


const Card = ({ od }) => {

 const{theme}= useContextGlobal()
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    const odontologos = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const odontologo = {
      id: od.id,
      name: od.name,
      username: od.username,
    };
    odontologos.push(odontologo);
    localStorage.setItem("odontologos", JSON.stringify(odontologos));
    alert("se ha añadido a favoritos")
  };

  return (
    <div className={theme.className}>
      <div className="card">
        <Link to={"/detail/" + od.id}>
          <h4>{od.name}</h4>
        </Link>
        <img className="doctor" src={Doctor} alt="" />
        <h5>{od.username}</h5>
        <p>ID {od.id}</p>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button
          onClick={(e) => {
            addFav();
          }}
          className="favButton"
        >
          &#128150;
        </button>
      </div>
    </div>
  );
};

export default Card;
