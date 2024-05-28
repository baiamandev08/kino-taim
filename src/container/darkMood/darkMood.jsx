import {createContext, useState} from "react";


export const ThemeContext = createContext(null)

export default function Provider({children}) {
    const [theme, setTheme] = useState("light")

    function toggle(){
        setTheme((prev)=> (prev === "light" ? "457b9d": "light"))
    }




    return <ThemeContext.Provider  value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
