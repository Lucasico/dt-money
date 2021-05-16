import styled from "styled-components";
import { darken, transparentize } from "polished";
export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    //todo input que tiver um input antes dele
    & + input {
      margin-top: 1rem;
    }
  }

  //pegar todo botão deste tipo
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    border: none;
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: string;
}
//para tipagem de estilos eu devo utilizar o generics do ts
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  /**
    tambem poderia ser: background: ${(props) =>
    props.isActive ? "colorA" : "ColorB"}
 */
  //transparentiza: decresce a opacidade da color
  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.8, activeColor) : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;