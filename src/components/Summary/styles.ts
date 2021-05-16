import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //espaçamento entre os item
  //  gap: 2rem;
  margin-top: -7rem;
  //telas que vão até 850
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 2rem;
    div {
      width: 100%;
    }
  }
  div {
    min-width: 20rem;
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      //display block faz o elemento se comportar como se fosse uma div
      //pegando padding, margin,
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    //a div que tiver a propriedade classe === highlight-background
    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
