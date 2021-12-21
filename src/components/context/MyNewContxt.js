import React, { useState } from "react";
import { createContext } from "react";

export const MyNewContxt = createContext()

export const MyNewContxt = ({ children }) =>{
    const [luser, setLuser] = useState({
        name: '',
        hobby: '',
        email: '',
        password: ''
    })
    const { name, hobby, email, password} = luser;
    return (
        <MyNewContxt.Provider value={{ luser, setLuser }}>
            {children}
        </MyNewContxt.Provider>
    )
}
export default MyNewContxt
