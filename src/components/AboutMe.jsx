import {useEffect, useState} from "react";
import {baseUrl, periodMonth} from "../utils/constants.js";

const AboutMe = () => {
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem('hero'));
        if(hero && (Date.now() - hero.timestamp < periodMonth)){
            return hero.payload;
        }
    });

    useEffect(() => {
        if(!hero) {
            fetch(`${baseUrl}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        bithYear: data.bith_year,
                        height: data.height,
                        mass: data.mass,
                        hairColor: data.hair_color,
                        eyeColor: data.eye_color,
                        skinColor: data.skin_color
                    };
                    setHero(info);
                    localStorage.setItem('hero', JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, []);

    return (
        <>
            {(!!hero) &&
                <div className={'fs-2 lh-lg text-justify ms-5'}>
                    <p><span className={'display-3'}>name:</span> {hero.name}</p>
                    <p><span className={'display-3'}>gender:</span> {hero.gender}</p>
                    <p><span className={'display-3'}>bith year:</span> {hero.bithYear}</p>
                    <p><span className={'display-3'}>height:</span> {hero.height}</p>
                    <p><span className={'display-3'}>mass:</span> {hero.mass}</p>
                    <p><span className={'display-3'}>hair color:</span> {hero.hairColor}</p>
                    <p><span className={'display-3'}>eye color:</span> {hero.eyeColor}</p>
                    <p><span className={'display-3'}>skin color:</span> {hero.skinColor}</p>
                </div>
            }
        </>
    )
}

export default AboutMe;