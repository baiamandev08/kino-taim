import React, {useContext} from 'react';
import SvgLogo from "../../assets/svg/SvgLogo";
import {NavLink} from "react-router-dom";
import SvgSearch from "../../assets/svg/SvgSearch";
import ImgRussia from "../../assets/img/Ellipse 1.png"
import {ThemeContext} from "../../container/darkMood/darkMood";
import SvgLight from "../../assets/svg/SvgLight";

const Header = () => {
    const {toggle} = useContext(ThemeContext)

    return (
        <header className="bg-[#262626] h-[60px] w-[100%]">
            <div className="container">
                <div className="flex justify-between items-center h-[60px]">
                    <div className="">
                        <SvgLogo/>
                    </div>

                    <nav className="text-white flex gap-[20px]">
                        <NavLink className="text-white" to="/">Главный</NavLink>
                        <NavLink className="text-white" to="/popular">Популярные</NavLink>
                        <NavLink className="text-white" to="/top_rated">Смотрет сейчас</NavLink>
                        <NavLink className="text-white" to="/up_coming">Ожидаемы</NavLink>
                    </nav>
                    <div className="flex gap-[20px]">
                        <button onClick={toggle} className="">
                            <SvgLight/>
                        </button>

                        <button><SvgSearch/></button>
                        <button>
                            <img src={ImgRussia} alt="flag rus" className="w-[24px] h-[24px]"/>
                        </button>
                    </div>

                </div>
            </div>
        </header>

    );
};

export default Header;