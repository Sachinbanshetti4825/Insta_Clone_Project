import React, { useState } from 'react'
import { usePost } from '../hooks/usePost';
import {useNavigate} from "react-router-dom"
import { useContext } from 'react';
import { PostContext } from '../Post.context';
import "../style/createPost.scss"

const CreatePost = () => {

    let navigate=useNavigate();

    let {loading}=useContext(PostContext);


    let [postData,setPostData] = useState({
        Caption:"",
        image:null
    });

    let {handleCreatePost}=usePost();


    async function handleSubmit(e){

        e.preventDefault();

        await handleCreatePost(postData.Caption,postData.image);

        setPostData({
            Caption:"",
            image:null
        })

        navigate("/");

    }

    if (loading) {
  return (
    <main className="loading">
      <h1>Creating Post....</h1>
    </main>
  );
}



  return (
  <div className="create-post">
    <div className="post-card">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="caption">Enter Caption :</label>
          <input
            type="text"
            id="caption"
            value={postData.Caption}
            onChange={(e) =>
              setPostData({
                ...postData,
                Caption: e.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">
            Choose Your Pic From Your Gallery :
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) =>
              setPostData({
                ...postData,
                image: e.target.files[0],
              })
            }
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  </div>
);
}

export default CreatePost

