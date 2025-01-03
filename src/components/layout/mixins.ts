import styled from 'styled-components';

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #2f3848;
  padding: 4rem;
`;

export const NombreUsuario = styled.p`
  color: #ffffff;
  font-size: 2.2rem;
  margin: 0;
`;

export const Span = styled.span`
  font-weight: 900;
`;

export const Nav = styled.nav`
  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:first-of-type {
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  font-family: "Raleway";
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  background-color: transparent;
  display: block;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  margin-top: 10rem;
`;