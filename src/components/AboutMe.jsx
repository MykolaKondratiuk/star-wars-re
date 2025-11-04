import { useEffect, useState } from "react";
import { base_url } from "../utils/constanst.js";

const AboutMe = () => {
    const [person, setPerson] = useState();

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => setPerson(data))
            .catch(() => setPerson("Error on fetch about me"));
    }, []);

    if (person) {
        return (
            <div className="far-galaxy fs-3">
                <h2>About Me</h2>
                <p><strong>ID:</strong> {person.id}</p>
                <p><strong>Name:</strong> {person.name}</p>
                <p><strong>Gender:</strong> {person.gender}</p>
                <p><strong>Skin Color:</strong> {person.skin_color}</p>
                <p><strong>Hair Color:</strong> {person.hair_color}</p>
                <p><strong>Height:</strong> {person.height} cm</p>
                <p><strong>Mass:</strong> {person.mass} kg</p>
                <p><strong>Eye Color:</strong> {person.eye_color}</p>
                <p><strong>Homeworld ID:</strong> {person.homeworld}</p>
                <p><strong>Birth Year:</strong> {person.birth_year}</p>
                <p><strong>Created:</strong> {person.created}</p>
                <p><strong>Edited:</strong> {person.edited}</p>
            </div>
        );
    } else {
        return (
            <p className="far-galaxy fs-2 lh-2">
                <span className="spinner-border spinner-border-sm"></span>
                <span className="ms-2">Loading...</span>
            </p>
        );
    }
};

export default AboutMe;
