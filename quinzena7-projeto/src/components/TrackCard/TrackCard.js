import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
    margin: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }
`

const TrackContainer = styled.h4`
    margin: 10px;
`

const ArtistContainer = styled.p`
    margin-right: 10px;
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

const TrackCard = (props) => {
    return (
        <TrackCardContainer>
            <div>
                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>
                <DeleteButton>
                    APAGAR
                </DeleteButton>
            </div>
            <audio controls="controls"> 
                <source src={props.url} type="audio/ogg" />
            </audio>
        </TrackCardContainer>
    )
}

export default TrackCard