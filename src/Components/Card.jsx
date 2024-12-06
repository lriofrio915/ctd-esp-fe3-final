import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === id)) {
      favorites.push(dentist);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${name} ha sido agregado a favoritos!`);
    } else {
      alert(`${name} ya está en favoritos.`);
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
