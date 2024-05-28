import React, {useContext} from 'react';
import Header from "../header/Header"
import Footer from "../footer/Footer";
import {ThemeContext} from "../../container/darkMood/darkMood";

export default function Layout ({children}) {

    const {theme} = useContext(ThemeContext)


    return (
        <div className={`bg-[${theme === "light" ? "#ffffff" : "#457b9d"}]`}>
            <Header/>
            <main className="min-h-[90vh] text-center">{children}</main>
            <Footer/>
        </div>
    );
};

