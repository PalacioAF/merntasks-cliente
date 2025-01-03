import styled from 'styled-components';

export const Containe = styled.div`
  background-color:#1a202d;
  padding: 4rem;

  form {
    max-width: 600px;
    margin: 0 auto;
  }
`;


export const Form = styled.form`
    max-width: 600px;
    margin: 0 auto;
`;

export const ContenedorInput = styled.div`
  display: flex;

  .label {
    margin-bottom: 1rem;
    color:#ffffff;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: .5rem;
  flex: 1;
  width: 100%;
`;


export const InputSubmit = styled.input`
  display: block;
  width: 100%;
  margin-top: 2rem;
  font-family: "Raleway";
  padding: 1.5rem;
  font-size: 1.4;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  background-color: #2f3848;
  color: #ffffff;

  &:hover {
    background-color: #2f3848;
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

export const ListaTareas = styled.ul`
    max-width: 600px;
    margin: 0 auto;
`;


export const TareaItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0.5rem 2rem;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

  export const Button = styled.button`
    margin-top: 2rem;
    font-family: 'Raleway';
    padding: 1.5rem;
    font-size: 1.4;
    font-weight: 400;
    border-radius: .5rem;
    border: none;
    transition: background-color .3s ease;
`;


export const ContaineTarea = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 0.5rem 2rem;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0px 4px 10px -3px rgba(117, 117, 117, 1);
  -moz-box-shadow: 0px 4px 10px -3px rgba(117, 117, 117, 1);
  box-shadow: 0px 4px 10px -3px rgba(117, 117, 117, 1);
`;

export const NombreTarea = styled.p`
  font-size: 1.6rem;
  flex: 1;
  padding-right: 2rem;
`;

export const Estado = styled.div`
  margin-right: 1rem;
`;

export const Acciones = styled.div`
  margin-right: 1rem;
`;

export const ButtonCompleto = styled.button`
  background-color: rgba(154, 252, 154, 0.3);
  color: #1a202d;
`;

export const ButtonIncompleto = styled.button`
  background-color: rgba(255, 178, 178, .4);
  color: #1a202d;
`;

export const ButtonPrimario = styled.button`
  margin-right: 1rem;
  font-family:'Raleway';
  padding:.8rem;
  font-size: 1.4;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  background-color: #2f3848;
  color: #ffffff;

  &::hover {
    background: #1a202d;
  }
`;

export const ButtonSecundario = styled.button`
  font-family: "Raleway";
  padding: .8rem;
  font-size: 1.4;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  background-color: #edf2f6;
`;