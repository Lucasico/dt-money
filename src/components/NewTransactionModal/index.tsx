//js /ts
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import ReactModal from "react-modal";
//img
import closeImg from "../../assets/Vector.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
//style
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

//config necessaria para questões de acessibilidade
ReactModal.setAppElement("#root");
interface PropsNewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: PropsNewTransactionModal) {
  const { createTransaction } = useTransactions();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  //pattern de nomeclatura de função handle, para functions que são disparadas
  //com ação do usuario
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, amount: value, category, type });

    setType("deposit");
    setTitle("");
    setValue(0);
    setCategory("");

    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //classe para estilizar o overlay do modal
      overlayClassName="react-modal-overlay"
      //classe para estilizar o conteudo
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {
          //todos os eventos sempre me retornam uma string, e como este estado é um numero
        }
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="#E52E4D"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
