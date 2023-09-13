import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./hook/useFetch";
import Sidebar from "./Sidebar";
import { BsFillPlayFill } from "react-icons/bs";
import "./moviepage.css";

const MoviePage = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(id);
    const [movie, setMovie] = useState([]);
    const [date, setDate] = useState(null);

    useEffect(() => {
        !isLoading && setMovie(data);
        setDate(new Date(data.release_date));
    }, [isLoading, data]);

    return (
        <div className="moviepage">
            <Sidebar />
            {isLoading ? (
                <div>Loading please wait</div>
            ) : error ? (
                <div>Something went wrong</div>
            ) : (
                movie && (
                    <div className="movie">
                        <div className="major">
                            <div className="poster">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.title}
                                />
                                <div className="play">
                                    <BsFillPlayFill className="icon" />
                                    <p>Watch Triller</p>
                                </div>
                            </div>
                            <ul className="details">
                                <li className="title" data-testid="movie-title">
                                    {movie.title}
                                </li>
                                <li data-testid="movie-release-date">
                                    {date.getUTCFullYear().toString()}
                                </li>
                                <li data-testid="movie-runtime">
                                    {movie.runtime & 60}m
                                </li>
                            </ul>
                        </div>
                        <div className="minor">
                            <div>
                                <div
                                    className="overview"
                                    data-testid="movie-overview"
                                >
                                    {movie.overview}
                                </div>
                                {/* <p className="infos">Director: {}</p>
                                <p className="infos">Writers: </p>
                                <p className="infos">Stars: </p>
                                <div>
                                    <div>Top rated movie #65</div>
                                    <div>Awards 9 nominations</div>
                                </div> */}
                            </div>
                            {/* <div className="other">
                                <button>See showtimes</button>
                                <button>More watch options</button>
                                <div>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default MoviePage;
