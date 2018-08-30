import React, { Component } from 'react';
import { connect } from 'react-redux'

import { onPlaylistTitlesContainerToggleClick, onLibraryToggleClick } from '../actions/navActions.js'

import SearchInput from './SearchInput.js'


class NavBar extends Component{

  // toggling playlist titles container
  onPlaylistTitlesContainerToggleClick = () =>{
    const toggle = !this.props.playlistTitlesContainerDisplay
    this.props.onPlaylistTitlesContainerToggleClick(toggle)
  }

  render(){
    let libraryToggleButton = this.props.playlistTracksContainerDisplay === true ? <div onClick={this.props.onLibraryToggleClick}>LIBRARY</div> : null

    return(
      <nav className="navigation-bar">
        <div onClick={this.onPlaylistTitlesContainerToggleClick}>
          PLAYLISTS
        </div>
        {libraryToggleButton}

        <SearchInput/>
      </nav>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    playlistTracksContainerDisplay: state.nav.playlistTracksContainerDisplay,
    playlistTitlesContainerDisplay: state.nav.playlistTitlesContainerDisplay
  }
}

export default connect(mapStateToProps, { onPlaylistTitlesContainerToggleClick, onLibraryToggleClick })(NavBar)
