import React from "react";
import "./app.css";

import Header from "./components/Header";
import Hastag from "./components/Hastag";
import Input from "./objects/Input";

const App = () => (
  <main className="app">
    <Header />
    <Hastag />
    <Input id="show" value="show" type="checkbox" content="Mostrar Eventos" />
  </main>
);

export default App;
