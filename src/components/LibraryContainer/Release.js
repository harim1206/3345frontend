import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onReleaseClick } from '../../actions/libraryActions.js'

import ReleaseTracks from './ReleaseTracks.js'


class Release extends Component{

  // fetch tracks for the release on click
  onReleaseClick = (release, id) => {
    const nextRelease = this.props.libraryReleases[id+1]
    this.props.onReleaseClick(release, nextRelease, id)
  }

  render(){

    const release = this.props.release
    const date = new Date(release.date_added)

    let releaseTracks

    if(this.props.currentReleaseTracks.length > 0 && release.id === this.props.currentReleaseTracks[0].id){
      releaseTracks = <ReleaseTracks/>
    }

    return(
      <React.Fragment>
        <tr onClick={()=>this.onReleaseClick(release, release.id)}>
          <td>{release.artist}</td>
          <td>{release.title}</td>
          <td>{release.label}</td>
          <td>{release.catno}</td>
          <td>{date.toLocaleDateString()}</td>

        </tr>

        {releaseTracks}

      </React.Fragment>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    libraryReleases: state.library.libraryReleases,
    currentReleaseTracks: state.library.currentReleaseTracks

  }
}

export default connect(mapStateToProps,{ onReleaseClick })(Release)
