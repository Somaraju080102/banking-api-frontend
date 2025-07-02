import { createContext, useEffect, useState } from "react";


export const Context=createContext();


export default function UserContext({children}){

    const[user,setUser]=useState(null);

    useEffect(()=>{
        const storeUser=localStorage.getItem("user");
        if(storeUser){
            setUser(JSON.parse(storeUser));
        }
    },[])
    const handlelogin=(userData)=>{
        console.log("UserData:",userData);
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData));
        
    }
    const handlelogout=()=>{
        setUser(null);
        localStorage.removeItem("user");
    }
    return(
        <Context.Provider value={{user,handlelogin,handlelogout}}>
            {children}
        </Context.Provider>

    )
}