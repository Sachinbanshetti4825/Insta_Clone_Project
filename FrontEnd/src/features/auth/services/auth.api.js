import axios from "axios"

let api=axios.create({
    baseURL:"http://localhost:3000/api/auth",
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