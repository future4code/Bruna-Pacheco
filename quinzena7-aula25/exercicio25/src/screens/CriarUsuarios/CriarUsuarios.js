import React from "react";
import { ButtonContainer } from "./styled";
import { InputNome} from "./styled";
import { InputEmail} from "./styled";
import { CaixaStyle} from "./styled";
import { ButtonEnviar} from "./styled";
import axios from "axios";
import { BASE_URL, axiosConfig } from "../../constants/requests";

export default class CriarUsuarios extends React.Component {
  state = {
    nome: "",
    email: ""
  };

  mudaNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  mudaEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };

    axios
      .post(`${BASE_URL}/users`, body, axiosConfig)
      .then(() => {
        alert(`O usuário ${this.state.nome} foi cadastrado!`);
        this.setState({ nome: "", email: "" });
      })
      .catch((erro) => alert(erro.message));
  };

  render() {
    return (
      <CaixaStyle>
        <p>Nome: </p>
        <InputNome value={this.state.nome} onChange={this.mudaNome} />
        <p>Email: </p>
        <InputEmail value={this.state.email} onChange={this.mudaEmail} />
        <ButtonContainer>
          <ButtonEnviar onClick={this.criarUsuario}>Enviar</ButtonEnviar>
        </ButtonContainer>
      </CaixaStyle>
    );
  }
}
