import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  ////padrão de declaração de função sempre que uma função for ser recebida como props
  //deve-se ser iniciada com ==> on
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  //sempre primeiro estiliza todos os components em tela, com css e tals
  //depois constroi a parte funcional
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </button>
        </Content>
      </Container>
    </>
  );
}
