import axios from "axios"

let api=axios.create({
    baseURL:"https://insta-clone-project-hzux.onrender.com/api/auth",
    withCredentials:true
})


export async function Login(LoginId,PassWord){

    let response = await api.post("/login",{
        LoginId,PassWord
    })

    return response.data;

}

export async function Register(UserName,PassWord,Email,Bio){

    let response=await api.post("/register",{
        UserName,PassWord,Email,Bio
    })

    return response.data;

}