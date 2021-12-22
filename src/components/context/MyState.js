import react, { useState } from "react";
import GlobaContxt from "./GlobalContxt";

const MyState =(props)=>{
    const stateData={
        "name" :"Niranjan",
        "age": "30"
    }
    const [newState, setNewState]= useState(stateData);
    const update=()=>{
        setTimeout(()=>{
            setNewState({
                "name": "God",
                "age": "40"
            })

        }, 1000)
    }


    return(
        <GlobaContxt.Provider value={{newState, update}}>
        {props.children};
        </GlobaContxt.Provider>

    )
}

export default MyState;