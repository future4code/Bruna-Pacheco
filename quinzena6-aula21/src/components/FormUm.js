import React from "react";
import styled from "styled-components";

const Campo = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: white;
   align-items: center;
`;
 const Texto = styled.h1`
 color: black;
 text-align: center;
 `;
 
 const Questao1 = styled.h2`
 color: black;
 text-align: center;

 `;
 
 const InputNome = styled.input`
  width: 15%;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  padding: 5px;
  position: relative;
  margin-left: 40%;
  cursor: pointer;
  
 `;

const Questao2 = styled.h2`
color: black;
text-align: center;
`;

const InputIdade = styled.input`
  width: 15%;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  padding: 5px;
  margin-left: 40%;
  cursor: pointer;
`;

const Questao3 = styled.h2`
color: black;
text-align: center;
`;

const InputEmail = styled.input`
width: 15%;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  padding: 5px;
  margin-left: 40%;
  cursor: pointer;
`;

const Questao4 = styled.h2`
color: black;
text-align: center;
`;

const InputEscolaridade = styled.input`
width: 15%;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  padding: 5px;
  margin-left: 40%;
  cursor: pointer;
`;

const ProximaEtapa = styled.button`
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: 5px 5px 2px gray;
  padding: 5px;
  margin-left: 45%;
  cursor: pointer;
`;


class FormUm extends React.Component {
  state = {
    nome: ``,
    email: ``,
    idade: ``,
  };

  mudaNome = (event) => {
    this.setState({nome: event.target.value});
  }

  mudaIdade = (event) => {
    this.setState({idade: event.target.value});
  }

  mudaEmail = (event) => {
    this.setState({email: event.target.value});
  };

    render() {
        return (
            <Campo>
                <Texto> Etapa 1 - Dados Gerais</Texto>
                <Questao1>1. Qual o seu nome?</Questao1>
                <InputNome 
                   value={this.state.nome}
                   onChange={this.mudaNome}
                   />
                <Questao2>2. Qual a sua idade?</Questao2>
                <InputIdade
                    value={this.state.idade}
                    onChange={this.mudaIdade}
                   />
                <Questao3>3. Qual a sua email?</Questao3>
                <InputEmail
                 value={this.state.email}
                 onChange={this.mudaEmail}
                 />
                <Questao4>4. Qual sua escolaridade?</Questao4>
                <InputEscolaridade></InputEscolaridade>
               
              </Campo>
        );
    }
}

export default FormUm;