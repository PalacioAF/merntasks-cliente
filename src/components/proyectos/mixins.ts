import styled from 'styled-components';

export const ListadoProyectosUl = styled.ul`
  li {
    margin-bottom: 2rem;
  }

  li a {
    font-size: 1.4rem;
    color: #2f3848;
    line-height: 1.5;
    font-weight: 300;
  }
`;

interface Props {
    categoria?: string;
  }

export const Alert = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 3rem;
  border-radius: 1rem;
  font-family: "Raleway";
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;

  background-color: ${(props) =>
    props.categoria === "alerta-ok"
      ? "rgb(109, 211, 109)"
      : props.categoria === "alerta-error"
      ? "rgb(230, 78, 78)"
      : "transparent"};
  color: ${(props) =>
    props.categoria === "alerta-ok"
      ? "rgb(2, 103, 2)"
      : props.categoria === "alerta-error"
      ? "#ffffff"
      : "inherit"};

  @media (min-width: 768px) {
    width: auto;
    top: 30px;
    right: 10px;
    left: auto;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 15px 0;
  font-family: 'Raleway';
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonBlock = styled(Button)`
  display: block;
  width: 100%;
  background-color: #2f3848;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    background: #1a202d;
  }
`;

export const ButtonBlank = styled(Button)`
  margin: 0;
  padding: 0;
  display: block;
`;

export const FormularioNuevoProyecto = styled.form`
 margin-top: 6rem;
`;


export const Input = styled.input`
  border-bottom: 1px solid #2f3848;
  border-radius: 0;
  background-color: #edf2f6;
  margin-bottom: 2rem;
  align-items: center;
  padding: 1rem;
  border: none;
  border-radius: .5rem;
  flex: 1;
  width: 100%;

  &::placeholder {
    color: #2f3848;
  }
`;

export const InputSubmit = styled.input`
  margin: 0;
  padding: 15px 0;
  font-family: 'Raleway';
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  color: #ffffff;
  display: block;
  width: 100%;
  background-color: #2f3848;

  &:hover {
    cursor: pointer;
    background: #1a202d;
  }
`;

export const MensajeError = styled.p`
  font-weight: 900;
  font-family: 'Roboto';
  padding: .5rem;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 1.6rem;
  border-radius: 0;
  max-width: 600px;
  margin: 2rem auto 0 auto;
  background-color: rgb(170, 0, 0);
  color: #ffffff;
`;

export const ContenedorApp = styled.div`
    display: flex;
    min-height: 100vh;
`

export const ContenedorTareas = styled.div`
  padding: 4rem;
`
