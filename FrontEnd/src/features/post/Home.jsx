import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {

    let [posts , setPosts] =useState([]);

    let [postData,setPostData] = useState({
        Caption:"",
        image:null,
    })

    let [post,setPost]=useState(null);

    async function getPost(){

        let posts=await axios.get("http://localhost:3000/api/post/getPost",{
            withCredentials:true
        });

        setPosts(posts.data.Posts)

    }

    async function createPost(){

        let formData=new FormData();

        formData.append("Caption",postData.Caption);
        formData.append("image",postData.image);

        let res=await axios.post("http://localhost:3000/api/post/createPost",formData,{
            withCredentials:true
        })

        await getPost();

        setPostData({
            Caption:"",
            image:null,
        })

        

    }



    useEffect(()=>{
        getPost();
    },[])

  return (
    <div>

        <div>
            <div>
                <label htmlFor="image">Choose Your Image for Post : </label>
                <input 

                    type="file" 
                    id="image" 
                    onChange={(e)=>(
                        setPostData({
                            ...postData,
                            image:e.target.files[0]
                        })
                    )}

                />
            </div>
            <div>
                <label htmlFor="Caption">Enter Caption for your post : </label>
                <input 

                    type="text" 
                    id="Caption"
                    onChange={(e)=>(
                        setPostData({
                            ...postData,
                            Caption:e.target.value
                        })
                    )}
                    value={postData.Caption}

                />
            </div>
            <button onClick={createPost}>CreatePost</button>
        </div>




      {
         posts.map(post=>(
            <div className='Post' key={post._id}>
                <img src={post.Image_Url} alt="error" />
                <p>{post.Caption}</p>
            </div>
         ))
      }
    </div>
  )
}

export default Home
