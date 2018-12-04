import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import axios from 'axios';
import Post from './Post/Post'

const baseURL = 'https://practiceapi.devmountain.com/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`${baseURL}/posts`)
    .then(response => {
      this.setState({posts: response.data});
    })
  }

  updatePost(id, text) {
    axios.put(`${baseURL}/posts?id=${ id }`, {text})
    .then(response => {
      console.log(response);
      this.setState({ posts: response.data });
    })
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          { posts.map (post => (
            <Post key={ post.id }
            text={ post.text }
            date={ post.date }
            updatePostFn={ this.updatePost }
            id={ post.id }/>
          ))}
          
        </section>
      </div>
    );
  }
}

export default App;
