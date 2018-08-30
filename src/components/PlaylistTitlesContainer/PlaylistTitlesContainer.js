import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
  onNewPlaylistInputChange,
  onNewPlaylistSubmit } from '../../actions/playlistTitlesContainerActions.js'

import PlaylistTitle from './PlaylistTitle.js'

class PlaylistTitlesContainer extends Component{

  // new playlist input change
  onNewPlaylistInputchange = (e) =>{
    let input = e.target.value
    this.props.onNewPlaylistInputChange(input)
  }

  // on new playlist submit
  onNewPlaylistSubmit = () =>{
    let postData = {
      name: this.props.newPlaylistInput
    }
    this.props.onNewPlaylistSubmit(postData)
  }


  render(){

    const playlistTitles = this.props.playlists.map((playlist)=><PlaylistTitle playlist={playlist} />)

    return(
      <div className="playlistTitlesContainer-wrapper">

        <div className="playlistTitles-wrapper">
          {playlistTitles}
        </div>


        <div className="new-playlist-wrapper">
          <input
            type="text"
            value={this.props.newPlaylistInput}
            placeholder="new playlist"
            onChange={(e)=>this.onNewPlaylistInputchange(e)}
          />

          <i className="fas fa-plus" onClick={this.onNewPlaylistSubmit}></i>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    playlists: state.library.playlists,
    newPlaylistInput: state.playlistTitlesContainer.newPlaylistInput
  }
}

export default connect(mapStateToProps, {
  onNewPlaylistInputChange,
  onNewPlaylistSubmit
 })(PlaylistTitlesContainer)
