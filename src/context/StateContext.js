import { useContext, useState } from "react";
import { context1 } from "./context";
export const useContextStates=()=>useContext(context1);

const StateContextProvider=(props)=>{

    const [pageData,setPageData]=useState(null);
    return(
        <context1.Provider value={{pageData,setPageData}}>
         {props.children};
        </context1.Provider>
    )
}

export default StateContextProvider