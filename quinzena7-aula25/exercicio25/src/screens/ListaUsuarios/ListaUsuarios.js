import React, { Component } from "react";
import { UserContainer } from "./styled";
import { ButtonCriar } from "./styled";
import { BASE_URL, axiosConfig } from "../../constants/requests";
import axios from "axios";

export default class ListaUsuarios extends Component {
  state = {
    listaUsuarios: []
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = async () => {
    try {
      const resposta = await axios.get(`${BASE_URL}/users`, axiosConfig);
      this.setState({ listaUsuarios: resposta.data });
    } catch (erro) {
      alert(erro.message);
    }
  };

  deletarUsuario = (id) => {
    axios
      .delete(`${BASE_URL}/users/${id}`, axiosConfig)
      .then(() => {
        this.pegarUsuarios();
        alert("Usuário deletado com sucesso!");
      })
      .catch((erro) => alert(erro.message));
  };

  render() {
    const renderizaLista = this.state.listaUsuarios.map((item) => {
      return (
        <UserContainer key={item.id}>
          {item.name}
          <ButtonCriar  onClick={() => this.deletarUsuario(item.id)}>X</ButtonCriar >
        </UserContainer>
      );
    });

    return <div>{renderizaLista}</div>;
  }
}
