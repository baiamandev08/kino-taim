import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API, API_KEY, MOVIE} from "../../api/Api";
import YouTube from "react-youtube";

const Treiler = ({id}) => {
    console.log(id)
    const [treiler, setTreiler] = useState([])

    useEffect(() => {
        axios(API + id + "/" + MOVIE + API_KEY).then(({data}) => {
            setTreiler(data.results)
        })
    }, []);

    return (
            <div className="flex  justify-center items-center gap-[10px] flex-wrap    ">
                {treiler.slice(0, 4).map((el) => (
                    <div key={el.id} className="  ">
                        <YouTube videoId={el.key}/>
                    </div>
                ))}
            </div>
    );
};

export default Treiler;