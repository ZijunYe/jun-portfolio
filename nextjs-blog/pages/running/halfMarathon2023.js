import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './runnerJournal.module.css';
import React, { useEffect, useState } from 'react';

export default function HalfMarathon2023(){
    return(
        <Layout>
        
            <h1 className={styles.contentTitle}>Half Marathon 2023</h1>
            <p className={styles.contentDate}>October 16, 2023</p>
           
            <div className={styles.content}>
            <h3 className={styles.intro}>
            The long run isn’t like short 5k run. If the 5k, I pursued is speed, then for long run like marathon, I pursed is the experience of the process.
            </h3>

            <img className={styles.routes}src="/running/halfmarathon.png"></img>

            <h4 className={styles.subtitle}>Purpose </h4>
            <p>
            Wrap up this year’s running race with half marathon in 1hours 58mins, that finally reached my personal goal for the half marathon which is within 2 hours. The main reason for me starting train long distance running is I want to develop my patient. Sometimes, I found out myself get frustration easily and impatient attitude towards things in life; So I wish I could train the patients through running as well. I usually do 5k run more often. In order to  train long distance, I start to add 1k by 1k to my running plan. My training start in Winter, so I hardly can run outdoor, long run in treadmill is extremely tedious for me. So for the training, I only did few outdoor run in mont royal as well as old port area if the weather wasn’t too bad. My stamina do developed a bit by bit, and able to maintain run outside for hour and half which the progress makes me really feel sense of accomplishment. 

            </p>
            <h4 className={styles.subtitle}>First Race: Ottawa Tamarack</h4>
            <p>
            The first half marathon(Ottawa Tamarack) came during May this year. This race for me are more abut curiosity and also want to prove of my stamina. I set my personal goal is to finish the race within 2hours. However, I didn’t get me that result, it end with 2hours 3minutes. During the first race, I experienced how my body reacts under the stress, especially during the race.  At beginning, my body feeling pretty well between 5k to 10k. After 13k, knees start feeling hurts; After reach 15k, the right shoulder start to feel tired. I have try to speed up during my last 1k, but wasn’t able to maintain that fast speed. Due to my ignorant about my own speed, I wasn’t able to identify which speed is good to maintain, and which is too fast may end with use up my energy for later distance. I would say my first half marathon is a hits , it tells me that if I keep my mindset same as 5k, it won’t work. Plus I also need to know more about my own mph, when is good speed to maintain, when is too fast. In order to improve my time for marathon, I have to increase my overall average speed. 
            </p>

            <h4 className={styles.subtitle}>Second Race: TCS Toronto Waterfront marathon </h4>
            <p>
            The second race, the most challenge part I feel is weather. When I sign up for the race, I did not expect the weather gonna be cold, plus the week before, the weather’s temperature suddenly drop made me didn’t feel run at all.  The training for this race definitely more than the first race. Because I was training during the summer, I gets more chance to run outside. The trail long run is so much fun than run on the tedious treadmill. So I also willing to do more run training outdoor. Throughout training, I get better idea about my average speed per mile, per kilometre. 

TCS half marathon is my second half marathon, and it is first time I ran with my running partner. I am really glad I am able have a partner that encourage each other and pursed our goal together during the training and race. The trail for the TCS Toronto waterfront isn’t like Ottawa tamarack trail, it does contains lots upper and down road, which need use more energy that one thing I didn’t unexpected. For the distance till 15k, my body feeling pretty well and I am able to maintain my speed, after 17k, I didn’t familiar with trail, body start to feel tired, knee start hurts. One side of my mind is, no matter the result, more about experience, another side of my brain was thing  ‘there still long way to go, feel I used up most of body energy, there is no way I can reach my goal anymore’. Deeply  I know if I just look at result, I wasn’t to enjoy the moment and completely enjoy, So at end 3k, I didn’t give my all, because I feel my leg reach on my max and no way I can compete within 2hr, until I see the 2hr pacer, the appearance of him gives so much power, I know as long as I run front of him, I will able to do it and I believe myself more ‘I CAN DO IT’. At last 0.5k, I paced myself and keep myself in front of the pacer. 
            </p>
            <h4 className={styles.subtitle}>Lessons Gained</h4>
            <p>
            The most important lesson I learnt from the half marathon is consistent is a key. Half marathon isn’t like 5k, you not only need speed, you also need to keep up with that speed long as possible.  And another lesson is about mindset.  Running progress isn’t like increase diagonal line, it up and down; at first I feel so pissed off myself when the result isn’t improve, I felt I didn’t not improve at all; But I didn’t understand, sometimes lot aspects could impact for the result, weather condition or  body condition. Ever steps counts, it’s all about work in progress, all about experience that mindset is one I also need to do more practice. 

            </p>
            </div>

            
        </Layout>
    ); 
}