import React, { Component } from 'react'


class Post extends Component {

  state = {
    posts: [
      {
        id: '134',
        title: 'Git 使用技巧',
        content: 'main content'
      },
      {
        id: '256',
        title: '命令使用技巧',
        content: 'main content'
      },
      {
        id: '545',
        title: 'Github 基础',
        content: 'main content'
      }
    ]
  }
  render () {
    const { id } = this.props.match.params
    const post = this.state.posts.find(t => t.id === id)
    return (
      <div className='post'>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post
