import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/libraryActions.js'

//Components
import Video from './Video.js'
import NavBar from './NavBar.js'
import UsernameInput from './UsernameInput.js'
import Library from './LibraryContainer/Library.js'
import PlaylistTitlesContainer from './PlaylistTitlesContainer/PlaylistTitlesContainer.js'
import PlaylistTracksContainer from './PlaylistTracksContainer/PlaylistTracksContainer.js'

class App extends Component {

  componentDidMount(){
    this.props.fetchPlaylists()
  }

  // create background div element
  createBackgroundDiv = () => {
    let bgUrl
    let bgSize
    let bgRepeat

    if(this.props.currentReleaseImgUrl){
      bgUrl = this.props.currentReleaseImgUrl
      bgSize = '450px 450px'
      bgRepeat = 'repeat'
    }else{
      bgUrl = 'https://78.media.tumblr.com/a7f02d7176d50f610b7f544b28c92e5a/tumblr_ohtrc8hT9n1sm5cgbo1_640.jpg'

    }

    let bgStyle = {
      backgroundImage: `url('${bgUrl}')`,
      backgroundSize: bgSize,
      width: '2500px',
      height: '2000px',
      backgroundRepeat: bgRepeat,
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '-5'
    }

    return <div style={bgStyle}></div>
  }

  render() {

    // Background image
    let bgDiv = this.createBackgroundDiv()
    // Top left 33/45 logo
    let logo = <div id='logo'>33/45</div>

    let mainContainer
    let navBar
    let playlistTitlesContainer

    if(this.props.enterUsernameDisplay){
      // 1. main container on load
      mainContainer = <UsernameInput/>
    }else if(!this.props.playlistTracksContainerDisplay){
      // 2. main container on username input
      mainContainer = <Library onSort={this.onSort}/>
    }else{
      // 3. main container on a playlist click
      mainContainer = <PlaylistTracksContainer/>
    }

    if(!this.props.enterUsernameDisplay){
      navBar = <NavBar/>
    }

    if(this.props.playlistTitlesContainerDisplay){
      // load playlist titles container on "playlist" button click in nav bar
      playlistTitlesContainer =  <PlaylistTitlesContainer/>
    }

    return (

      <div className="App">

        <div className="main-container--shadow">

          <Video/>
          <div className = "main-container--padding">

            {navBar}
            <div className={this.props.playlistTitlesContainerDisplay ? "main-container" : "main-container--playlisthidden"}>
              {playlistTitlesContainer}
              {mainContainer}
            </div>

          </div>

        </div>

        {logo}
        {bgDiv}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      currentReleaseImgUrl: state.video.currentReleaseImgUrl,
      playlistTitlesContainerDisplay: state.nav.playlistTitlesContainerDisplay,
      playlistTracksContainerDisplay: state.nav.playlistTracksContainerDisplay,
      enterUsernameDisplay: state.nav.enterUsernameDisplay
    }
  )
}

export default connect(mapStateToProps, { fetchPlaylists })(App);


// on table column header sort
// onSort = (sortKey) =>{
//   let data = this.props.libraryReleases
//   console.log(`sortKey: `,sortKey)
//
//   if(sortKey === 'id'){
//     data.sort((a,b) => a[sortKey] - b[sortKey])
//   }else if(sortKey=== 'date added'){
//     data.sort((a,b)=>{
//       let keyA = new Date(a['date_added']),
//       keyB = new Date(b['date_added']);
//
//       if(keyA < keyB) return 1;
//       if(keyA > keyB) return -1;
//       return 0;
//     })
//
//   }else{
//     data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
//   }
//
//
//   this.props.onSort(data)
//   // *** not working
// }
