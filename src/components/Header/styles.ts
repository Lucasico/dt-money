import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  /**
  lembrando que 1rem, equivale a ao font size root da tela
   */
  display: flex;
  margin: 0 auto;
  background-color: var(--blue);
  max-width: 1120px;
  //top //left and right //bottom
  padding: 1rem 1rem 12rem;
  //vertical
  align-items: center;
  //:horizontal
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    button {
      margin-top: 0.5rem;
      width: 100%;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    background-color: var(--blue-light);
    //tirando a borda padrão do html
    border: 0;
    //top and bottom //left and right
    padding: 0rem 2rem;
    border-radius: 0.25rem;
    // 16 * 3 = 3rem
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      /* filter: blur(1px); */
      filter: brightness(0.9);
    }
  }
`;
