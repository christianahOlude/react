// import React, { useState } from "react";
import {useGetNowPlayingMoviesQuery} from '../../service/movieApi'
import MovieCard from "../../reuseable/MovieCard"

// let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=29377ecd45b605b7041c9c4351adc48d";

const NowPlaying =()=>{

   
    const data = useGetNowPlayingMoviesQuery()
    console.log(data)
    return(
        <div>
            <MovieCard data={response}/>
        </div>
    )
}

export default NowPlaying;