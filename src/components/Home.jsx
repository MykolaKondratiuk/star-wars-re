import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";
import React from "react";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;