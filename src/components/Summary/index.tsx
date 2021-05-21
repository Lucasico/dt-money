import { useContext } from "react";
import incomeImg from "../../assets/Entradas.svg";
import exitImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";
export function Summary() {
  //consumindo aquele contexto
  const { transactions } = useContext(TransactionsContext);
  console.log("transactions-summary", transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={exitImg} alt="Outcomes" />
        </header>
        <strong>- R$ 1.000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container>
  );
}
