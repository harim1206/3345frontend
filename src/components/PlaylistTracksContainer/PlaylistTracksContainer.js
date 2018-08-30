import React, { Component } from 'react';
import PlaylistTrack from './PlaylistTrack'

import { connect } from 'react-redux'


class PlaylistTracksContainer extends Component{

  // return a filtered array of releases when search input exists
  onSearch = (search, tracks) =>(
    tracks.filter((track) =>{
        return (track.description.toLowerCase().indexOf(search) !== -1 ||
        track.artist.toLowerCase().indexOf(search) !== -1 ||
        track.release.toLowerCase().indexOf(search) !== -1 ||
        track.label.toLowerCase().indexOf(search) !== -1 ||
        track.catno.toLowerCase().indexOf(search) !== -1)
      }
    )
  )


  render(){

    let search = this.props.searchInput.toLowerCase()
    let currentPlaylistTracks = this.props.currentPlaylistTracks

    if(search.length > 0 && this.props.playlistTracksContainerDisplay){
      currentPlaylistTracks = this.onSearch(search, currentPlaylistTracks)
    }

    const tracks = currentPlaylistTracks.map((track)=><PlaylistTrack track={track}/>)


    const columnHeaders = ['DESCRIPTION','ARTIST','RELEASE','URL','LABEL','CATNO'].map((cat)=>{
      if(cat==='DESCRIPTION'){
        return <th style={{width:"30%"}}>{cat}</th>
      }else if(cat==='ARTIST'){
        return <th style={{width:"20%"}}>{cat}</th>
      }else{
        return <th style={{width:"20%"}}>{cat}</th>
      }
    })

    return(
      <div className="playlistDisplay-wrapper">
        <table className="playlistDisplay-table">
          <thead>
            <tr>
              {columnHeaders}
            </tr>
          </thead>
          <tbody>
            {tracks}
          </tbody>
        </table>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlaylistTracks: state.playlistTitlesContainer.currentPlaylistTracks,
    searchInput: state.nav.searchInput,
    playlistTracksContainerDisplay: state.nav.playlistTracksContainerDisplay
  }
}

export default connect(mapStateToProps)(PlaylistTracksContainer)
