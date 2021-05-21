import { useContext } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl */}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl */}
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "medium",
                    timeStyle: "medium",
                  }).format(new Date(transaction.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
