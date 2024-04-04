import { useContext, useState } from "react";
import { context1 } from "./context";

export const useContextStates=()=>useContext(context1);

const StateContextProvider=(props)=>{

    const [user,setUser]=useState(null);
    const [login,setLogin]=useState(null);
    const [loginErr,setLoginErr]=useState(null);
    const [signUpErr,setSignUpErr]=useState(null);
    const [logout,setLogout]=useState(false);

    return(
        <context1.Provider value={{user,setUser,login,setLogin,loginErr,setLoginErr,signUpErr,setSignUpErr,logout,setLogout}}>
         {props.children};
        </context1.Provider>
    )
}

export default StateContextProvider