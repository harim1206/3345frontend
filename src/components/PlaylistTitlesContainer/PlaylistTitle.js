import React, { Component } from 'react';

import { connect } from 'react-redux'
import {
  onPlaylistTitleClick,
  onPlaylistTitleDelete
} from '../../actions/playlistTitlesContainerActions.js'

class PlaylistTitle extends Component{

  render(){
    const playlist = this.props.playlist

    return(
      <div onClick={()=>this.props.onPlaylistTitleClick(playlist)}>
        <i className="fas fa-times fa-xs" onClick={()=>this.props.onPlaylistTitleDelete(playlist)}></i>
        {"   "+playlist.name}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {}
}

export default connect(mapStateToProps,{
  onPlaylistTitleClick,
  onPlaylistTitleDelete
})(PlaylistTitle)
