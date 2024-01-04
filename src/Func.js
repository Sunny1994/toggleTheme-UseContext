import React, { useContext } from "react"
import { ThemeContext } from "./App"


const Func=()=>{
    const darktheme= useContext(ThemeContext)

    const themestyle={
        backgroundColor: darktheme? '#333': '#CCC',
        color: darktheme? '#CCC': '#333',
        padding: '8rem',
        margin: '70px'
    }

    return(

        <div style={themestyle}>Function Comp</div>
    )
}

export default Func