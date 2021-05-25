import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/Entradas.svg";
import exitImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const transa = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    //valores iniciais sempre devem ser iniciados antes da operação do reducer
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>

        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(transa.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={exitImg} alt="Outcomes" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(transa.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(transa.total)}
        </strong>
      </div>
    </Container>
  );
}
