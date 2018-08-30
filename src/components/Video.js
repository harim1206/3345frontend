import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import { connect } from 'react-redux'
import { onLibraryVideoFinish } from '../actions/libraryActions.js'
import { onPlaylistTracksVideoFinish } from '../actions/playlistTracksContainerActions.js'

class Video extends Component {

  onEnded = () =>{

    if(!this.props.playlistTracksContainerDisplay){
      // Video logic on main library
      const newCurrentVideo = this.props.nextVideo
      let currVideos = this.props.currentReleaseVideos
      const newNextVideo = currVideos[currVideos.indexOf(this.props.currentVideo)+1]

      const newCurrentRelease = this.props.nextRelease
      const newNextRelease = this.props.libraryReleases[this.props.nextRelease.id+1]

      this.props.onLibraryVideoFinish(newCurrentVideo, newNextVideo, newCurrentRelease, newNextRelease)
    }else{
      // Video logic on playlists
      const currTracks = this.props.currentPlaylistTracks
      const newNextTrack = currTracks[currTracks.indexOf(this.props.nextTrack)+1]

      this.props.onPlaylistTracksVideoFinish(this.props.nextTrack, newNextTrack)
    }

  }

  render(){

    return (
      <div className="video-component-wrapper">
        <div className="react-player">
          <ReactPlayer
            playing={true}
            controls={true}
            onEnded={this.onEnded}
            url={this.props.currentVideo.uri || this.props.currentVideo.url}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    libraryReleases: state.library.libraryReleases,
    // video
    currentVideo: state.video.currentVideo,
    nextVideo: state.video.nextVideo,
    // library
    nextRelease: state.library.nextRelease,
    currentReleaseVideos: state.library.currentReleaseVideos,
    // playlist tracks container
    nextTrack: state.playlistTracksContainer.nextTrack,
    // playlist titles container
    currentPlaylistTracks: state.playlistTitlesContainer.currentPlaylistTracks,
    // navigation bar
    playlistTracksContainerDisplay: state.nav.playlistTracksContainerDisplay
  }

}

export default connect(mapStateToProps,
  {
    onLibraryVideoFinish,
    onPlaylistTracksVideoFinish
  }
)(Video)
