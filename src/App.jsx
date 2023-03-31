import React from "react";
import "./app.css";

import Header from "./components/Header";
import Hastag from "./components/Hastag";
import Checkbox from "./objects/Checkbox";

const App = () => (
  <main className="app">
    <Header />
    <Hastag />
    <Checkbox
      id="show"
      value="show"
      type="checkbox"
      content="Mostrar Eventos"
    />
  </main>
);

export default App;
