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
      this.setState({ posts: response.data });
    })
  
  }

  deletePost(id) {
    axios.delete(`${baseURL}/posts?id=${ id }`)
    .then(response => {
      this.setState({ posts: response.data });
    })

  }

  createPost(post) {
    let newPost = {
      text: post
    }
    axios.post(`${baseURL}/posts`, newPost)
    .then(response => {
      console.log(response);
      this.setState({ posts: response.data });
    })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose createPostFn={ this.createPost }/>
          { posts.map (post => (
            <Post key={ post.id }
            text={ post.text }
            date={ post.date }
            updatePostFn={ this.updatePost }
            deletePostFn={ this.deletePost }
            id={ post.id }/>
          ))}
          
        </section>
      </div>
    );
  }
}

export default App;
