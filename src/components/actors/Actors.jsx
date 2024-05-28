import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ACTORS, API, API_KEY} from "../../api/Api";
import {Swiper, SwiperSlide} from "swiper/react";
import {NavLink} from "react-router-dom";

const Actors = ({id}) => {
    const [actors, setActors] = useState([])


    useEffect(() => {
        axios(API + id + "/" + ACTORS + API_KEY).then(({data}) => {
            setActors(data.cast)
        })
    }, []);

    return (
        <div className="h-[500px] bg-gray-700 w-[100%] mb-[20px]">
            <Swiper
                className="mySwiper"
                spaceBetween={60}
                slidesPerView={5}>

                {actors.map((el) => (
                    <SwiperSlide key={el.id}>
                        <div  key={el.id} className="h-[300px] bg-black text-white  w-[200px] ">{el?.name}
                            <p className="text-blue-500  text-[13px]">{el?.character}</p>

                            <NavLink to={`/person/${el.id}`}>
                                <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el?.profile_path}`}/>
                            </NavLink>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
};

export default Actors;