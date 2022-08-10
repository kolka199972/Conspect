import React from 'react'
import Post from './Post'
import PostsList from './PostsList'
import Offer from './Offer'
import {useParams} from 'react-router-dom'

const Posts = () => {
  const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
    {id: 3, title: 'Post 3'}
  ]
  const {postID} = useParams()
  const getPost = (id) => posts.find((post) => post.id.toString() === id)
  const post = getPost(postID)

  return (
    <>
      <Offer />
      {postID ? <Post post={post} id={postID} /> : <PostsList posts={posts} />}
    </>
  )
}

export default Posts
