import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  overflow: auto;

  //por padrão a table não ocupa 100% da tela
  table {
    width: 100%;
    //top and bottom //left and right
    border-spacing: 0 0.5em;

    th {
      color: var(--text-body);
      font-weight: bold;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
     
      padding: 1rem 2rem 1rem 4rem;
      border: 0;
      background-color: var(--shape);
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;
      //quando o td for o primeiro td
      &:first-child {
        color: var(--text-title);
      }

      //todo td que tenha esse atributo class === deposit
      &.deposit {
        color: var(--text-body);
        font-weight: bold;
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
