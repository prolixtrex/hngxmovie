import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import moviebox from "./assets/moviebox.jpeg";
import "./header.css";

const Header = ({ setSearch }) => {
    const [text, setText] = useState("");
    return (
        <header className="header">
            <div className="logo">
                <img src={moviebox} alt="logo" width={50} height={50} />
                MovieBox
            </div>
            <div className="search">
                <input
                    type="text"
                    placeholder="What do you want to watch?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="button" onClick={() => setSearch(text)}>
                    <BsSearch />
                </button>
            </div>
            <nav className="menu">
                <button style={{ cursor: "pointer" }}>Sign in</button>
                <button style={{ cursor: "pointer" }}>
                    <RxHamburgerMenu />
                </button>
            </nav>
        </header>
    );
};

export default Header;
