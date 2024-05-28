import {useContext} from "react";

export const colorDarkText = (theme) => {
    return theme === "light" ? "white" : "black"
}