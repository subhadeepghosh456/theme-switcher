import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeTogglor = () =>{

    
    const [ThemeMode, setThemeMode] = useContext(ThemeContext)
    

    return(
        <div onClick={()=>{
            setThemeMode(ThemeMode==="light" ? "dark" : "light")
        }}>
        <span >{ThemeMode === "light" ? "Turn Off" :"Lights On"}</span>
        </div>
    );

};


export default ThemeTogglor;