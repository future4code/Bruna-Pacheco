import React from "react";
import FormUm from "./components/FormUm";
import FormDois from "./components/FormDois";
import FormTres from "./components/FormTres";
import Final from "./components/Final";



class App extends React.Component {
  state = {
    etapa:1
  }

irProximaEtapa = () => {
 this.setState({etapa: this.state.etapa +1})
}

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <FormUm/>
        case 2:
          return <FormDois/>
        case 3:
          return <FormTres/>
        case 4:
          return <Final/>
        default: 
        alert("Tente Novamente!")
      }
    }
    return (
    <div>
      <button
        onClick={this.irProximaEtapa}>
        Próxima Etapa</button>
        {renderizaEtapa()}
    </div>
    )

  }
}
  
export default App;