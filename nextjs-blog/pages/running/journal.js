import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './runnerJournal.module.css';
import React, { useEffect, useState } from 'react';

export default function Journal(){
    const journals =[
        {
            count: '01.', 
            title: 'Half Marathon 2023', 
            link:'/running/halfMarathon2023',
            preread: 'Recap of my 21k races that I done in 2023 year(Ottawa Tamarack & TCS Toronto Waterfront marathon)'
        }, 
    ]

    const [stravaScriptLoaded, setStravaScriptLoaded] = useState(false);

    useEffect(() => {
        if (!stravaScriptLoaded) {
        // Add the Strava script only once
        const script = document.createElement('script');
        script.src = 'https://strava-embeds.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
        setStravaScriptLoaded(true);
        }
    }, [stravaScriptLoaded]);

    return(
        <Layout>
            <h1 className={styles.bigTitle}>🏃‍♀️Runner Journal</h1>

            <div className={styles.menuItems}>
            {journals.map((journal, index) => (
                <div className={styles.menuItems} key={index}>
                   <Link className={styles.title}href={journal.link}>
                    <h2><span className={styles.count}>{journal.count}</span> {journal.title}</h2>
                   </Link>
                   <p className={styles.preread}>{journal.preread}</p>
                </div>
            ))}


            </div>
            <div className={styles.stravaEmbed} data-embed-type="activity" data-embed-id="10044172208"></div>
        
           
        </Layout>
    ); 
}