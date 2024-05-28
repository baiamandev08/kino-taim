import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {API, API_KEY, MOVIES_ACTOR, PERSON} from "../../api/Api";
import Card from "../../components/Ul/card/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {NavLink} from "react-router-dom";

const Person = () => {
    const {id} = useParams()
    const [person, setPerson] = useState({})
    const [personMovies, setPersonMovies] = useState([])


    useEffect(() => {
        axios(API.slice(0, API.length - 6) + PERSON + "/" + id + API_KEY).then(({data}) => {
            setPerson(data)
        })
    }, []);


    useEffect(() => {
        axios(API.slice(0, API.length - 6) + PERSON + "/" + id + "/" + MOVIES_ACTOR + API_KEY).then(({data}) => {
            setPersonMovies(data.cast)
        })
    }, []);

    return (
        <div>
            <div className="container">
                <div className="flex gap-[20px]">
                    <div className="w-[300px]">
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`}/>
                    </div>

                    <div className="max-w-[700px]">
                        <h1>{person.name}</h1>
                        <p className="text-[12px]">{person.biography}</p>
                    </div>


                </div>
                <div>

                    <Swiper
                        className="mySwiper"
                        spaceBetween={60}
                        slidesPerView={5}>
                        {
                            personMovies.map((item) => (

                            <SwiperSlide>

                                        <Card key={item.key} item={item}/>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </div>

        </div>

    );
};

export default Person;