import hero from "../assets/main.jpg";
import Section from "./Section.jsx";
import Text from "./Text.jsx";
import React from "react";

const Main = () => {
    return (
        <main className="clearfix">
            <section className="float-start w-25 me-3">
                <img className="w-100" src={hero} alt="Luke Skywalker"/>
            </section>
            <Section/>
            <Text/>
        </main>
    );
};

export default Main;