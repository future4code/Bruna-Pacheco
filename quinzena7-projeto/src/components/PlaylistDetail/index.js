import React from "react";
import styled from "styled-components";
import TrackCard from "../TrackCard/TrackCard";

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightskyblue;
    
`
const Buttons = styled.button`
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
const InputDados = styled.input`
    border-radius:15px;
	border:1px solid black;
	display:inline-block;
	cursor:pointer;
    background-color:#ededed;
    padding:13px 33px;
    `

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

class PlaylistDetail extends React.Component {
    state = {
        tracks: [
            {
                "id": "",
                "name": "Bohemian Rhapsody",
                "artist": "QUEEN",
                "url": "url"
            },
            {
                "id": "",
                "name": "Under Pressure",
                "artist": "QUEEN",
                "url": "url"
            }
            
        ]
    }

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
            />
        })

        return (
            <PlaylistDetailContainer>
                <TrackCreationForm>
                    <div>
                        <label>Música:</label>
                        <InputDados />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <InputDados />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <InputDados />
                    </div>
                    <Buttons type="submit" >Adicionar música</Buttons>
                </TrackCreationForm>
                {tracks}
                <Buttons onClick={() => this.props.changePage("playlists")} >Voltar para playlists</Buttons>
            </PlaylistDetailContainer>
        )
    };
};

export default PlaylistDetail