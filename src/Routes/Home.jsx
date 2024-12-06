import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data, theme } = useContext(ContextGlobal);
  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} /> // Renderiza una Card por cada dentista
        ))}
      </div>
    </main>
  );
};

export default Home;
