import axios from "axios";

let api=axios.create({
    baseURL:"https://insta-clone-project-backend.onrender.com/api",
    withCredentials:true
})


export async function getFeed(){

    let res=await api.get("post/feed");

    return res.data;

}

export async function Like(PostId){

    let res=await api.post(`like/like/${PostId}`);

    return res.data;

}

export async function unLike(PostId){

    let res=await api.delete(`like/unlike/${PostId}`);

    return res.data;

}

export async function Follow(FolloweeId){

    let res=await api.post(`/follow/follow/${FolloweeId}`);

    console.log(res);

    return res.data;

}

export async function unFollow(FolloweeId){

    let res=await api.delete(`/follow/unfollow/${FolloweeId}`);

    return res.data;

}




export async function createPost(Caption,image) {

    let formData = new FormData();

    formData.append("Caption",Caption)
    formData.append("image",image);
    
    let res=await api.post("/post/createPost",formData);

    console.log(res)

    return res.data;

}

export async function getSpecificPost(PostId) {

    let res=await api.get(`/post/getSpecificPost/${PostId}`)

    return res.data;

}

export async function Save(PostId){

    let res=await api.post(`/save/Save/${PostId}`);

    return res.data;

}

export async function unSave(PostId){

    let res=await api.delete(`/save/unSave/${PostId}`);

    return res.data;

}

export async function Comment(PostId,text){

    let res=await api.post(`/cmt/comment/${PostId}`,{
        text:text
    });

    return res.data;

}

export async function UnComment(PostId){

    let res=await api.delete(`/cmt/unComment/${PostId}`);

    return res.data;

}

export async function getComment(PostId){

    let res=await api.get(`/cmt/getComment/${PostId}`);

    return res.data;

}