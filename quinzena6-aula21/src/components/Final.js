import React from "react";
import styled from "styled-components";

const Fim = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: white;
   align-items: center;
`;

const Acabou = styled.h1`
 color: black;
 text-align: center;
 `;

const FuiEmbora = styled.h2`
color: black;
text-align: center;
`;


class Final extends React.Component {
    
  

      render() {
          return (
              <Fim>
                  <Acabou> O FORMULARIO ACABOU </Acabou>
                  <FuiEmbora> Muito obrigada por participar! Entraremos em contato! </FuiEmbora>
              </Fim>
          );
      }
  }
  
  export default Final;