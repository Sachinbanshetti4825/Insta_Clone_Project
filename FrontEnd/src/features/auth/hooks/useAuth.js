import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { Login,Register } from "../services/auth.api";

export const useAuth = ()=>{

    let context=useContext(AuthContext);

    let {user,setUser,loading,setLoading,msg,setMsg} = context;

    const handleLogin = async (LoginId,PassWord)=>{

        setLoading(true);

        let response=await Login(LoginId,PassWord);

        setUser(response.data);
        setMsg(response.msg);

        setLoading(false);

    }

    const handleRegister = async (UserName,Email,PassWord,Bio)=>{

        setLoading(true);

        let response=await Register(UserName,Email,PassWord,Bio);

        setUser(response.data);
        setMsg(response.msg);

        setLoading(false);

    }

    return {
        user,loading,handleLogin,handleRegister
    }


}