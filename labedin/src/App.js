import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './img/perfil.jpg';
import ImagemLabenu from './img/simbolo.png';
import ImagemFacul from './img/untr.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {ImagemPerfil}
          nome="Bruna Pacheco" 
          descricao=" Estudante de Marketing e
          Desenvolvimento Frontend "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {ImagemLabenu}
          nome="Labenu" 
          descricao="Frontend com React" 
        />
        
        <CardGrande 
          imagem= {ImagemFacul}
          nome="Uninter" 
          descricao="Tecnologia em Marketing" 
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
        email="brunapacheco@hotmail.com"
        descricao="Campo Grande, MS, Brasil"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
