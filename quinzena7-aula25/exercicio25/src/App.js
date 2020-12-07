import React from "react";
import CriarUsuarios from "./screens/CriarUsuarios/CriarUsuarios";
import ListaUsuarios from "./screens/ListaUsuarios/ListaUsuarios";


export default class App extends React.Component {
  state = {
    criarUsuarios: true
  };

  mudaTela = () => {
    this.setState({ criarUsuarios: !this.state.criarUsuarios });
  };

  render() {
    return (
      <div>
        <button onClick={this.mudaTela}>
          {this.state.criarUsuarios ? "Clique para ir" : "Clique para voltar"}
        </button>
        {this.state.criarUsuarios ? <CriarUsuarios /> : <ListaUsuarios />}
      </div>
    );
  }
}
