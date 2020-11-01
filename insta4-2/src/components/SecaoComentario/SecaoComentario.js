import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
     nome:""
	}

	onChangeComentario = (event) => {
		this.setState({nome: event.target.value});
        console.log(event.target.value)
	};

	render() {
		return <div className={'comment-container'}>
			<input
	
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.nome}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
