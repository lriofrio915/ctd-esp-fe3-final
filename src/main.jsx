import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Dentist from "./Routes/Detail";
import Contact from "./Routes/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />}/>
          <Route path="dentist/:id" element={<Dentist />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="favs" element={<Favs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
