import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {app} from './Firebase';

import { useContext} from "react";
import {context} from "./context";
const auth=getAuth(app);
export const useAuthen=()=>useContext(context);
const ContextProvider=({children})=>{
  
    return(
      <context.Provider value={{app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}}>
        {children}
      </context.Provider>
    )
}

export default ContextProvider;