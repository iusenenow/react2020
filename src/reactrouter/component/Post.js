import React, { useEffect, useState } from 'react'

const Post = (props) => {

  const initialState = {
    post: null
  }

  const [state, setstate] = useState(initialState)

  useEffect(() => {
    let id = props.match.params.post_id
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => response.json())
      .then(data => setstate({ post: data }))
  }, [props.match.params.post_id])

  return (
    <div className="container">
      {state.post ?
        <div className="post">
          <h4 className="center">{state.post.title}</h4>
          <p>{state.post.body}</p>
        </div> : <div className="center">Loading post...</div>}
    </div>
  )
}

export default Post
