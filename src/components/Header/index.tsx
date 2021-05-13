import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  //sempre primeiro estiliza todos os components em tela, com css e tals
  //depois constroi a parte funcional
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">New Transaction</button>
      </Content>
    </Container>
  );
}
