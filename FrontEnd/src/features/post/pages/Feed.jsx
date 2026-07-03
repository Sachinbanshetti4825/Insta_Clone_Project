import React, { useEffect } from 'react'
import Post from '../Components/Post'
import "../style/feed.scss"
import { usePost } from '../hooks/usePost'
import Nav from '../Components/Nav'

const Feed = () => {

  let {posts ,loading,handlegetFeed}=usePost();

  console.log(posts);

  async function fetchPosts() {
     await handlegetFeed();
  }


  useEffect(()=>{
    fetchPosts()
  },[]);

  return (
    <main className='feed_page' >
      <Nav/>
        <div className="feed">
            <div className="posts">
                {
                  posts.map(post=>(
                    <div key={post._id}>
                      <Post  post={post}  />
                    </div>
                  ))
                }
            </div>
        </div>
    </main>
  )
}

export default Feed
