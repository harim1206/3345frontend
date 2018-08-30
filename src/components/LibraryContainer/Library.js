import React, { Component } from 'react';
import { connect } from 'react-redux'
import Release from './Release'


class Library extends Component{

  // return a filtered array of releases when search input exists
  onSearch = (search, releases) =>(
    releases.filter((release) =>{
        return (release.artist.toLowerCase().indexOf(search) !== -1 ||
        release.title.toLowerCase().indexOf(search) !== -1 ||
        release.label.toLowerCase().indexOf(search) !== -1 ||
        release.catno.toLowerCase().indexOf(search) !== -1)
      }
    )
  )

  render(){
    let search = this.props.searchInput.toLowerCase()
    let libraryReleases = this.props.libraryReleases

    // Filter releases on search
    if(search.length > 0 && !this.props.playlistTracksContainerDisplay){
      libraryReleases = this.onSearch(search, libraryReleases)
    }

    let releases = libraryReleases.map((release)=><Release release={release}/>)


    const columnHeaders = ['ARTIST','TITLE','LABEL','CATNO','DATE'].map((cat)=>{
      return(
        <th onClick={()=>this.props.onSort(cat.toLowerCase())}>{cat}</th>
      )
    })


    return(
      <div className="library-wrapper--padding">
        <div className="library-wrapper">
          <table className="library__table">
            <thead >
              <tr>
                {columnHeaders}
              </tr>
            </thead>
            <tbody>
              {releases}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
    libraryReleases: state.library.libraryReleases,
    searchInput: state.nav.searchInput,
    playlistTracksContainerDisplay: state.nav.playlistTracksContainerDisplay
  }
}

export default connect(mapStateToProps)(Library)
