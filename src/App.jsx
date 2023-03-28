import React from "react";
import "./app.css";

import Header from "./components/Header";
import Hastag from "./components/Hastag";
import Label from "./objects/Label";

const App = () => (
  <main className="app">
    <Header />
    <Hastag />
    <Label content="Mostrar Eventos" />
  </main>
);

export default App;
