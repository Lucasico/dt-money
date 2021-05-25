import React from "react";
import ReactDOM from "react-dom";
//import do mirage => uma especie de api fake, dentro do proprio frontEnd
import { createServer, Model } from "miragejs";
import { ModifieldThemeProvider } from "./hooks/useModifielTheme";
import App from "./App";

//cria o server
createServer({
  /**
   * Criando um bd fake
   */
  models: {
    //nome e tipo do bd
    transaction: Model,
  },

  //populando inicialmente o bd fake
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ],
    });
  },

  //cria as routes no objeto
  routes() {
    //namespace
    this.namespace = "api";
    //rota
    this.get("/transactions", () => {
      //retorno dela
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      //salvando no bd fake, nome do bd e dados
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ModifieldThemeProvider>
      <App />
    </ModifieldThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
