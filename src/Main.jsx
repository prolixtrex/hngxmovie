import { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Featured from "./Featured";
import "./main.css";

const Main = () => {
    const [search, setSearch] = useState("");

    return (
        <main className="main">
            <Header {...{ search, setSearch }} />
            <Banner />
            <Featured />
        </main>
    );
};

export default Main;
