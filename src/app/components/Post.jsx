import React from 'react'
import {useHistory} from 'react-router-dom'

const Post = ({post, id}) => {
  const history = useHistory()
  const goToList = (hasPost) => {
    hasPost ? history.push('/posts') : history.replace('/posts')
  }
  return (
    <>
      <button onClick={() => goToList(post)}>К списку записей</button>
      <h2>{post ? post.title : `Post with ID:${id} not found.`}</h2>
    </>
  )
}

export default Post
