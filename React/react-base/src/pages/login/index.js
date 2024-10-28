import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
      <h1>Login
        <small>paeg</small>
      </h1>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet</ Paragrafo>
      <button type="button">Enviar</button>
    </ Container>
  );
}
