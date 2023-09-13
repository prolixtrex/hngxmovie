import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./hook/useFetch";

import "./featured.css";

const Featured = () => {
    const { data, isLoading, error } = useFetch(
        "top_rated?language=en-US&page=1"
    );
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            setMovies(data.results);
        }
    }, [isLoading, movies, data]);

    return (
        <div className="featured">
            <h2>Top Rated Movies</h2>
            <div className="movies">
                {
                    isLoading ? (
                        <div>Loading data plaese wait</div>
                    ) : error ? (
                        <div>Something went wrong</div>
                    ) : (
                        movies &&
                        movies.slice(0, 10).map((movie, index) => (
                            <Link
                                to={`/movies/${movie.id}`}
                                key={index}
                                className="card"
                                data-testid="movie-card"
                            >
                                <img
                                    data-testid="movie-poster"
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <p className="title" data-testid="movie-title">
                                    {movie.title}
                                </p>
                                <p
                                    className="date"
                                    data-testid="movie-release-date"
                                >
                                    {new Date(movie.release_date)
                                        .getUTCFullYear()
                                        .toString()}
                                </p>
                            </Link>
                        ))
                    )
                    //
                }
            </div>
        </div>
    );
};

export default Featured;
