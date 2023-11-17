import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './runnerJournal.module.css';

export default function Menu(){
    const journals =[
        {
            count: '01.', 
            title: 'Half Marathon 2023', 
            link:'/running/halfMarathon2023',
            preread: 'Recap of my 21k races that I done in 2023 year(Ottawa Tamarack & TCS Toronto Waterfront marathon)'
        }, 
    ]

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


        </Layout>

        
    ); 
}