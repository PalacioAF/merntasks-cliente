import styled from 'styled-components';

export const FormUsuario = styled.div`
    background-color: var(--gris2);
    height: 100vh;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormUsuarioContaine = styled.div`
  padding: 5rem 3rem;
  max-width: 500px;
  width: 95%;
  background-color: var(--blanco);
  border-radius: 1rem;
  -webkit-box-shadow: 0px 6px 11px -8px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 0px 6px 11px -8px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 6px 11px -8px rgba(0, 0, 0, 0.9);
`;

export const CampoForm = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CampoFormLabel = styled.label`
  flex: 0 0 100px;
  font-family: var(--textFont);
`;

export const Input = styled.input`
  border: 1px solid #e1e1e1;
  padding: 1rem;
  flex: 1;
`;
