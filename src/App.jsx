import React, { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const { theme } = useContext(ContextGlobal);
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
