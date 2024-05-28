import React, {useContext, useEffect, useState} from 'react';
import Card from "../../components/Ul/card/Card";
import axios from "axios";
import {API, API_KEY,  UPCOMING} from "../../api/Api";
import {ThemeContext} from "../darkMood/darkMood";
import {colorDarkText} from "../../components/Ul/styles/Styles";

const Popular = () => {
    const {theme} = useContext(ThemeContext)
    const [popular, setPopular] = useState([])


    useEffect(() => {
        axios(API + UPCOMING + API_KEY).then(({data}) => {
            setPopular(data?.results)
        })
    }, []);

    const textColor = colorDarkText(theme)
    console.log(textColor)
    return (
        <div className="pt-[93px]">
            <div className="container">
                <h1 className={`text-[46px]  font-bold mb-[132px] text-${textColor}`}>Ожидаемы</h1>

                <div className="grid grid-cols-7">
                    {
                        popular.length ? (
                            popular.map((item) => <Card key={item?.id} item={item}/>)

                        ) : (
                            <h1>Loading...</h1>

                        )}


                </div>


            </div>

        </div>
    );
};

export default Popular;