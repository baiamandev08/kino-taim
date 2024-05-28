import {useNavigate} from "react-router";

const Card = ({item}) => {
    const navigate = useNavigate()
    return (
        <div className="w-[154px] rounder-[4px] mb-[20px] ">

            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item?.poster_path}`}
                 className="w-[110px] h-[170px] rounder-[4px] " alt="img" onClick={() => navigate(`/details/${item?.id}`)}
            />
            <p className="font-bold text-[18px] text-start ">{item?.title}</p>

        </div>
    );
};

export default Card;