import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={theme}>
      {" "}
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No hay dentistas destacados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
