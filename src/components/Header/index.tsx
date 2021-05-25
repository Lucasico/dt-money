import Switch from "react-switch";
import { useModifieldTheme } from "../../hooks/useModifielTheme";
import { Container, Content, ContainerButton } from "./styles";

import logoImg from "../../assets/Logo.svg";

interface HeaderProps {
  ////padrão de declaração de função sempre que uma função for ser recebida como props
  //deve-se ser iniciada com ==> on
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  const { stateSwithc, modifieldTheme } = useModifieldTheme();
  function handleModifieldTheme() {
    modifieldTheme(stateSwithc);
  }

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="dt money" />

          <ContainerButton>
            <button type="button" onClick={onOpenNewTransactionModal}>
              New Transaction
            </button>

            <Switch
              onChange={handleModifieldTheme}
              checked={stateSwithc}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={15}
              offColor="#f0f2f5"
              onColor="#121214"
              offHandleColor="#5F2EE6"
              onHandleColor="#f0f2f5"
            />
          </ContainerButton>
        </Content>
      </Container>
    </>
  );
}
