import React, {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"


const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]


    return(
        <div
        style={{
            padding:"1rem",
            backgroundColor:`${currectTheme.backgroundColor}`,
            color:`${currectTheme.textColor}`,
            textAlign:"center"
        }}
        >
            <h1>Context API Theme toggler</h1>
            <p>This is a nice paragraph</p>

            <button
                style={{
                    backgroundColor: "#26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color: "#FFF",
                    border:`${currectTheme.border}`
                }}
            >Click Me</button>
        </div>
    )



}


export default HeroSection;