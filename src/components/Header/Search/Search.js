import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange (e) {
    this.setState({ currentSearch: e.target.value });  
  }

  handleClick () {
    this.props.filterPostsFn(this.state.currentSearch);
  }



  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" 
          onChange={this.handleChange}/>

          <SearchIcon onClick={this.handleClick} id="Search__icon"/>
        </div>
        
      </section>
    )
  }
}