import React, { Component } from 'react';

import { connect } from 'react-redux'
import { onCurrentPlaylistTrackClick } from '../../actions/playlistTracksContainerActions.js'

class PlaylistTrack extends Component{

  onCurrentPlaylistTrackClick = (track) =>{

    const tracks = this.props.currentPlaylistTracks
    const currentIndex = tracks.indexOf(track)
    const nextTrack = tracks[currentIndex+1]

    this.props.onCurrentPlaylistTrackClick(track, nextTrack)
  }

  render(){
    const track = this.props.track

    return(
      <tr onClick={()=>this.onCurrentPlaylistTrackClick(track)}>

        <td>{track.description}</td>
        <td>{track.artist}</td>
        <td>{track.release}</td>
        <td><a href={track.url}>link</a></td>
        <td>{track.label}</td>
        <td>{track.catno}</td>

      </tr>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentPlaylistTracks: state.playlistTitlesContainer.currentPlaylistTracks
  }
}

export default connect(mapStateToProps,{ onCurrentPlaylistTrackClick })(PlaylistTrack)
