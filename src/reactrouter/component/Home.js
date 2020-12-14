import React, { useEffect, useState } from 'react'
// import Rainbow from '../hoc/Rainbow';
import { Link } from 'react-router-dom';

const Home = () => {

  const initialState = {
    posts: []
  }

  const [state, setstate] = useState(initialState)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setstate({ posts: data.slice(0, 10) }))
  }, [])

  return (
    <div className="container">
      <h3 className="center">Home页面</h3>
      {state.posts.length ? (
        state.posts.map(post => (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        ))
      ) : <div className="center">没有推送。</div>}
    </div>
  )
}

export default Home