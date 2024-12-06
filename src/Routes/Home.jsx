import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, data } = useContext(ContextGlobal); // Consumir el contexto
  return (
    <main className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist} // Pasar el dentista como prop al componente Card
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
