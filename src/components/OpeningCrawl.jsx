import {useEffect, useState} from "react";
import {baseUrl} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrowl] = useState(() => sessionStorage.getItem('opening_crawl'));

    useEffect(() => {
        if (!openingCrawl) {
            const episode = Math.floor(Math.random() * 6 + 1);
            fetch(`${baseUrl}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrowl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
                .catch(() => setOpeningCrowl('Error loading opening crawl'))
        }
    }, [openingCrawl]);

    if (openingCrawl) {
        return (
            <p className="far-galaxy fs-2 lh-lg">{openingCrawl}</p>
        )
    } else {
        return (
            <p className="far-galaxy fs-2 lh-lg">
                <span className={'spinner-border spinner-border-sm m-1'}></span>
                <span className={'spinner-grow spinner-border-sm'}>Loading...</span>
            </p>
        )
    }

}

export default OpeningCrawl;