import React, { useEffect, useState } from 'react'
import { usePost } from '../hooks/usePost'

import { useParams } from "react-router-dom";
import "../style/comment.scss"
import { useAuth } from '../../auth/hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../auth/auth.context';

const Comment = () => {

 let {comment,comments,handleComment,handleUnComment,handleGetComment}=usePost();

  let [cmtText,setCmtText]=useState("");

  let {id}=useParams()

  
  // let {user}=useContext(AuthContext);
  let {user}=useAuth();

    async function fetchAllComments(id){

      await handleGetComment(id);

    }

    async function handleSubmit(e){
      e.preventDefault();

      await handleComment(id,cmtText);

      setCmtText("");

}

    useEffect(()=>{
      fetchAllComments(id)
    },[])

  
    
    
  return (
  <div className="comment_page">

      <div className="add_comment">
        <input
          type="text"
          placeholder="Enter Comment..."
          value={cmtText}
          onChange={(e) => setCmtText(e.target.value)}
        />

        <button onClick={(e) =>handleSubmit(e) }>
          Add Comment
        </button>
      </div>

    <div className="comments">
      {
        comments.map((comment)=>{

          return(
            <div className="comment_card" key={comment._id}>

            

            <div className="left">
              <img
                src={comment.User.profile_image}
                alt="error"
              />
              <h4>{comment.User.UserName}</h4>
            </div>
              

              <div className="info">
                <p>{comment.text}</p>
              </div>
            
            

                {comment.User._id=== user._id && (
                  <button
                    className="delete_btn"
                    onClick={() => handleUnComment(comment._id)}
                  >
                    Delete
                  </button>
                )}

            </div>
          )

        })
      }
    </div>
  </div>
  )
}



export default Comment
