import React, { Component } from 'react'
import './home.css'
import {
  Link
 } from 'react-router-dom'


class Home extends Component {
  state = {
    posts: [
      {
        id: '134',
        title: '我的博客',
        content: 'main content'
      },
      {
        id: '256',
        title: '我的技能',
        content: 'main content'
      },
      {
        id: '545',
        title: '我的简历',
        content: 'main content'
      }
    ]
  }

  render () {
    const postList = this.state.posts.map(t => (
      <Link key={t.id} to={`/post/${t.id}`}>{t.title}</Link>
    ))
    return (
      <div className='home'>
        <div className='post-list'>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home
