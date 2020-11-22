import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightskyblue;
    height: 100%;
    padding: 100px;
`

class Playlists extends React.Component {
    state = {
        playlists: [
            {
                "id": "6156b484-003f-4f0c-83a2-400193363d3b",
                "name": "Rock"
            },
            {
                "id": "2b33ad5c-5a1a-4502-ad90-1ffdc1c7b499",
                "name": "Pop-Rock"
            }
        ]
    }

    render () {
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
            />
        })

        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )
    };
};

export default Playlists