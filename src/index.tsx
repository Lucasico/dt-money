import React from "react";
import ReactDOM from "react-dom";
//import do mirage => uma especie de api fake, dentro do proprio frontEnd
import { createServer } from "miragejs";
import App from "./App";

//cria o server
createServer({
  //cria as routes no objeto
  routes() {
    //namespace
    this.namespace = "api";
    //rota
    this.get("/transactions", () => {
      //retorno dela
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

//parte padrão do react
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
