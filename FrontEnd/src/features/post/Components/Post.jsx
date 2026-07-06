import React from 'react'
import { usePost } from '../hooks/usePost';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {


    let {handleLike,handleunLike,handleFollow,handleunFollow,handleSave,handleUnSave}=usePost();

    let navigate=useNavigate();

  return (
    <div className="post"


    >
        <div className="upper">
            <div className="user_profile">
                <img src={post.User.profile_image} alt="error" />
            </div>
            <h2>{post.User.UserName}</h2>
            <button onClick={post.isFollowed ? ()=>handleunFollow(post.User._id):()=>handleFollow(post.User._id) }>{post.isFollowed ? "Unfollow":"Follow"}</button>
        </div>
        <div className="middle">
            <img src={post.Image_Url} alt="" />
        </div>
        <div className="bottom">
            <div className="icons">
                
                    <div className="left">
                        <button onClick={post.isLiked ? ()=>handleunLike(post._id) :()=>handleLike(post._id)} className={post.isLiked ? "Unlike" : "Like"} ><i class="ri-heart-line"></i>{post.likeCount}</button>
                        <button onClick={(e)=>navigate(`/comment/${post._id}`)} ><i class="ri-chat-1-line"></i></button>
                        <button><i class="ri-share-forward-line"></i></button>
                    </div>

                    <div className="right">
                        <button className={post.isSaved ? "unSave" : "Save"} onClick={post.isSaved ? ()=>handleUnSave(post._id) : ()=>handleSave(post._id) } ><i class="ri-save-line"></i></button>
                    </div>

            </div>
            <div className="caption">
                <p>{post.Caption}</p>
            </div>
        </div>
    </div>
  )
}

export default Post
