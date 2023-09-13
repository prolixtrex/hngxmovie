import React from "react";
import moviebox from "./assets/moviebox.jpeg";
import { CiHome } from "react-icons/ci";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { GrSchedules, GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <Link to={`/`}>
                    <img src={moviebox} alt="moviebox" />
                    <p>MovieBox</p>
                </Link>
            </div>

            <ul className="nav">
                <li className="iconH">
                    <CiHome className="icon" />
                    Home
                </li>
                <li className="active iconH">
                    <BiCameraMovie />
                    Movies
                </li>
                <li className="iconH">
                    <MdOndemandVideo />
                    TV Series
                </li>
                <li className="iconH">
                    <GrSchedules />
                    Upcoming
                </li>
            </ul>

            <div className="quiz">
                <p>Play movie quizes and earn free tickets</p>
                <p>50k people are playing now</p>
                <button>start playing</button>
            </div>

            <div className="logout">
                <button className="iconH">
                    <GrLogout />
                    Log out
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
