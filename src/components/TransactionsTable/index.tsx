import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => console.log("res", response.data));
  }, []);

  return (
    <Container>
      <table>
        {
          //titulos da table
        }
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            //corpo da tabela
          }
          <tr>
            <td>Desenvolmento de webite</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>11/12/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$500,00</td>
            <td>Sobreviver</td>
            <td>07/05/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
