import hero from "../assets/main.jpg";
import React from "react";

const Hero = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={hero} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;