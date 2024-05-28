import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import {Pagination} from 'swiper/modules';

import {ACTORS, API, API_KEY, MOVIE} from "../../api/Api";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import YouTube from "react-youtube";
import Treiler from "../../components/treiler/Treiler";
import Actors from "../../components/actors/Actors";


const Details = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})


    useEffect(() => {
        axios(API + id + API_KEY).then(({data}) => {
            setDetails(data)
        })
    }, []);


    return (
        <div>
            <div style={{background: `url("https://image.tmdb.org/t/p/original${details?.backdrop_path}")no-repeat center/cover`}}
                 className="min-h-[97vh] mx-[80px] my-[50px] rounded-[15px]">
                <div>
                    <h1 className="text-white">{details?.title}</h1>
                    <div className="flex">
                        <p className="text-white ">{details?.release_date}</p>

                        <p className="text-white px-[20px] ">{details?.runtime}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="max-w-[700px]">{details.overview}</p>
                <h1>Жанры:</h1>

                <Actors id={id}/>

                <Treiler id={id}/>


            </div>
        </div>

    );
};

export default Details;