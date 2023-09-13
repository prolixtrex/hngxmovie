import { useState, useEffect } from "react";
import useFetch from "./hook/useFetch";

import "./banner.css";

const Banner = () => {
    const { data, isLoading, error } = useFetch(
        "now_playing?language=en-US&page=1"
    );
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            setBanner(data.results);
        }
        // console.log(banner.results.map((data) => data.title));
    }, [isLoading, data]);

    // useEffect(() => {
    //     !isLoading && console.log(banner.slice(0, 2));
    // }, [isLoading, banner]);

    return (
        <div className="banner">
            {isLoading ? (
                <div>Loading Please wait</div>
            ) : error ? (
                <div>An error occured</div>
            ) : (
                banner &&
                banner.slice(0, 1).map((movie, index) => (
                    <div key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="details">
                            <h1 className="title">{movie.title}</h1>
                            <p className="overview">{movie.overview}</p>
                            <button type="button">Watch Triller</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Banner;
