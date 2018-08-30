import React, { Component } from 'react';
import { connect } from 'react-redux'

import { onSearchInputChange } from '../actions/navActions.js'


class SearchInput extends Component{

  onSearchInputChange = (e) =>{
    let input = e.target.value
    this.props.onSearchInputChange(input)
  }

  render(){
    return(
      <div>
        <input type="text"
          value={this.props.searchInput}
          onChange={(e)=>this.onSearchInputChange(e)}
          placeholder="Search"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    SearchInput: state.nav.SearchInput
  }
}

export default connect(mapStateToProps, { onSearchInputChange })(SearchInput)
