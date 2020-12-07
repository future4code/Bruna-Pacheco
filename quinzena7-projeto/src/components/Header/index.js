import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: whitesmoke;
    font-size: 50px;
`

const ButtonsContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;    
`
const ButtonPlaylist = styled.div`
    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:10px;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:13px 28px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    justify-content:space-between;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
                <ButtonPlaylist onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</ButtonPlaylist>
                <ButtonPlaylist onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</ButtonPlaylist>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header