import React from "react";
import styled from "styled-components";


const PlaylistCreationFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightskyblue;

`

const PlaylistCreationForm = styled.form`   
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const ButtonCadastrar = styled.button`
    box-shadow: 0px 0px 0px 0px #ffffff;
	background-color:#ededed;
	border-radius:15px;
	border:1px solid black;
	display:inline-block;
	cursor:pointer;
	color:black;;
	font-family:arial;
	font-size:17px;
	font-weight:bold;
	padding:13px 53px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
	&:hover {
	background-color:#dfdfdf;
`
const InputCadastro = styled.input`
    border-radius:15px;
	border:1px solid black;
	display:inline-block;
	cursor:pointer;
    background-color:#ededed;
    padding:13px 33px;
    `
const FraseFim = styled.div`
    font-size:50px;
    font-weight: bold;
`
const BotaoCadastrar = styled.button`
    background-color:#050505;
	border-radius:28px;
	border:1px solid #080808;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:11px 76px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
    `
class PlaylistCreationPage extends React.Component {
    state = {
     
    }
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                
                <PlaylistCreationForm>
                    <label></label>
                    <InputCadastro
                        placeholder="Nome da Playlist"
                    />
                    <ButtonCadastrar type="submit">Cadastrar Playlist</ButtonCadastrar>
                </PlaylistCreationForm>
                <br>
                </br>
                <br>
                </br>
                <FraseFim>CURTA 3 MESES DE PREMIUM GRÁTIS</FraseFim>
                <br>
                </br>
                <br>
                </br>
                <BotaoCadastrar>Cadastrar</BotaoCadastrar>
                
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage