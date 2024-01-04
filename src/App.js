import React, { useState } from "react"
import Func from "./Func"
export const ThemeContext= React.createContext()

export default function App(){

  const [darktheme, setDarktheme]= useState(false)

  function toggleme(){
    setDarktheme(!darktheme)
  }

  return( 
     <ThemeContext.Provider value={darktheme}>  

     
    <div style={{color: "blue", textAlign: "center"}}>
      <h2>Theme Toggler</h2>
       <button onClick={toggleme}>Toggle me</button>
       <Func />
    </div>
   
    </ThemeContext.Provider>
  )
}
