import React from "react";
import "./app.css";

import Header from "./components/Header";
import Hastag from "./components/Hastag";
import Label from "./objects/Label";
import Input from "./objects/Input";

const App = () => (
  <main className="app">
    <Header />
    <Hastag />
    <Input value="show" />
    <Label content="Mostrar Eventos" />
  </main>
);

export default App;
