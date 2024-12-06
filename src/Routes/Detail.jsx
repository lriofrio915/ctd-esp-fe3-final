import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!dentist) {
    return <p>No se encontró información del dentista.</p>;
  }

  return (
    <div className={theme}>
      <h1>Detalles del Dentista</h1>
      <p>
        <strong>Nombre:</strong> {dentist.name}
      </p>
      <p>
        <strong>Email:</strong> {dentist.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {dentist.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`http://${dentist.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dentist.website}
        </a>
      </p>
    </div>
  );
};

export default Detail;
