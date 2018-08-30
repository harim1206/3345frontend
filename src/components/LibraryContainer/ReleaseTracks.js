import React, {Component} from 'react'
import { connect } from 'react-redux'
import { onVideoClick } from '../../actions/libraryActions.js'

class ReleaseTracks extends Component{

  // on playlist select menu change, add track to playlist
  saveToPlaylist = (video, release, event) =>{

    let postData = {
      artist: release.artist,
      release: release.title,
      label: release.label,
      catno: release.catno,
      resource_url: release.resource_url,
      library_id: release.id,
      title: "",
      url: video.uri,
      description: video.description,
      duration: video.duration,
      imgurl: this.props.currentReleaseImgUrl,
      playlist_id: event.target.value
    }

    fetch('http://localhost:3000/api/v1/tracks', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })

  }

  onVideoClick = (video, event) =>{
    let arr = this.props.currentReleaseVideos
    const nextVideo = arr[arr.indexOf(video)+1]

    this.props.onVideoClick(video, nextVideo)
  }

  createColumnHeaders = (columnTitles) => (
    columnTitles.map((title)=><td className='track-column-header'>{title}</td>)
  )

  render(){

    // an array of select options
    const playlistSelectOptions = this.props.playlists.map((playlist)=>{
      return <option value={playlist.id}>{playlist.name}</option>
    })

    // an array of table rows of tracks
    const tracks = this.props.currentReleaseTracks.map((track)=>{
      return (
        <tr className='track-container-row'>
          <td></td>
          <td>{track.title}</td>
          <td>{track.position}</td>
          <td>{track.duration}</td>
          <td></td>
        </tr>

      )
    })

    // an array of table rows of youtube links
    const youtubes = this.props.currentReleaseVideos.map((video)=>{
      // debugger
      return (
        <tr
          className='track-container-row'
          onClick={(event)=>this.onVideoClick(video, event)}
        >
          <td></td>
          <td>{video.title}</td>
          <td>
            <select
              name="text"
              onChange={(event)=>this.saveToPlaylist(video, this.props.currentRelease, event)}
            >
              {playlistSelectOptions}
            </select>
          </td>
          <td><a href={video.uri}> link </a></td>
          <td></td>
        </tr>
      )
    })

    return(
      <React.Fragment>

        <tr className='track-container-row'>
          <td colSpan={5} style={{fontWeight: 'bold'}}>TRACKLIST</td>
        </tr>

        <tr className='track-container-row'>
          {this.createColumnHeaders(['','Title','Position','',''])}
        </tr>

        {tracks}

        <tr className='track-container-row'>
          <td colspan={5} style={{fontWeight: 'bold'}}>YOUTUBE LINKS</td>
        </tr>

        <tr className='track-container-row'>
          {this.createColumnHeaders(['','Title','Playlist','URL',''])}
        </tr>

        {youtubes}

      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    playlists: state.library.playlists,
    currentRelease: state.library.currentRelease,
    currentReleaseTracks: state.library.currentReleaseTracks,
    currentReleaseVideos: state.library.currentReleaseVideos
  }
}

export default connect(mapStateToProps,{ onVideoClick })(ReleaseTracks)
