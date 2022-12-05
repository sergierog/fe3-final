



const Card = ({ name, username, id  }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
  }

  return (
    <div className="card" >
        <h2>{name}</h2>
        <img src="" alt="" />
        <h3>{username}</h3>
        <p>ID {id}</p>
        
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav } className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
