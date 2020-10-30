import React from "react";
import styled from "styled-components";

const Meio = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: white;
   align-items: center;
`;

const Etapa3 = styled.h1`
 color: black;
 text-align: center;
 `;

const Questao6 = styled.h2`
color: black;
text-align: center;

`;

const InputMotivo = styled.input`
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

const Questao7 = styled.h2`
color: black;
text-align: center;

`;

const InputComplementar = styled.input`
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



class FormTres extends React.Component {
    
  
   
  
      render() {
          return (
              <Meio>
                  <Etapa3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </Etapa3>
                  <Questao6>6. Por que não terminou um curso de graduação?</Questao6>
                  <InputMotivo></InputMotivo> 
                  <Questao7>7. Você fez algum curso complementar?</Questao7>
                  <InputComplementar></InputComplementar>  
              </Meio>
          );
      }
  }
  
  export default FormTres;