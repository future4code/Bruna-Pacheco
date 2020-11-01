import React from "react";
import styled from "styled-components";

const Centro = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: white;
   align-items: center;
`;

const Etapa2 = styled.h1`
 color: black;
 text-align: center;
 `;

const Questao5 = styled.h2`
color: black;
text-align: center;

`;

const InputCurso = styled.input`
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

const Questao6 = styled.h2`
color: black;
text-align: center;

`;

const InputUnidade = styled.input`
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

class FormDois extends React.Component {
    state = {
      curso: ``,
      unidade: ``,
    };

  
    mudaCurso = (event) => {
      this.setState({curso: event.target.value});
    }
  
    mudaUnidade = (event) => {
      this.setState({unidade: event.target.value});
    };
  
   
  
      render() {
          return (
              <Centro>
                  <Etapa2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Etapa2>
                  <Questao5>5. Qual o seu curso?</Questao5>
                  <InputCurso 
                     value={this.state.curso}
                     onChange={this.mudaCurso}
                     />
                  <Questao6>6. Qual a unidade de ensino?</Questao6>
                  <InputUnidade
                      value={this.state.unidade}
                      onChange={this.mudaUnidade}
                     />  
              </Centro>
          );
      }
  }
  
  export default FormDois;