import { createContext,useState } from "react";

export const AuthContext= createContext()

export const AuthProvider = ({children})=>{

    let [user,setUser]=useState("");
    let [msg,setMsg]=useState("");
    let [loading,setLoading]=useState(false);

    return (
        <AuthContext.Provider value={{user,setUser,msg,setMsg,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

}