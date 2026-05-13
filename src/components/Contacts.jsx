import '../contacts.css'
import Option from "./Option.jsx";
import {baseUrl, periodMonth} from "../utils/constants.js";
import {useEffect, useState} from "react";

const Contacts = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && (Date.now() - planets.timestamp < periodMonth)) {
            return planets.payload;
        }
        return [];
    });


    useEffect(() => {
        if (planets.length === 0) {
            fetch(`${baseUrl}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    const planetNames = data.map(item => item.name);
                    setPlanets(planetNames);
                    localStorage.setItem('planets', JSON.stringify({
                        payload: planetNames,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [planets]);


    return (
        <div className="container">
            <form>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planets</label>
                <select id="planet" name="planet">
                    {planets.map((item, index) => <Option value={item} text={item} key={index}/>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."
                          style={{height: '200px'}}></textarea>
                <div className="btn btn-danger">Submit</div>

            </form>
        </div>
    );
};

export default Contacts;