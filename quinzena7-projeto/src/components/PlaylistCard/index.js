import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
`

const DeleteButton = styled.button`
   box-shadow: 3px 4px 0px 0px #8a2a21;
	background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color:#c62d1f;
	border-radius:18px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	padding:4px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;  
`

const ButtonAbrir = styled.button`
    box-shadow: 0px 10px 14px -7px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:18px;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:13px 28px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <ButtonAbrir  onClick={() => props.changePage("playlistDetail")}>Abrir</ButtonAbrir >
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton>APAGAR</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard