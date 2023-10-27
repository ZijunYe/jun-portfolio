import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './menu.module.css';

export default function Menu(){
    return(
        <Layout>
            <h1 className={styles.bigTitle}>👩‍💻Work Experience</h1>
            {/* <img src= "/graphic/LineMarker.svg" alt="Underline" className={styles.underline}/> */}
            <div className={styles.box}>
                    <div className={styles.jobs}>
                        <Link className={styles.jobTitle} href="/work/menu"><h3 className={styles.jobTitle}>Software Developer</h3></Link>
                        <div className={styles.jobDetail}>
                            <p>Trend Micro</p>
                            <p>September 2023 - December 2023</p>   
                        </div>
                        <p className={styles.jobDescription}>
                            This is my thrid coop term. Still in progress! 
                        </p>
        
                        <div className={styles.container}>
                            <Link className={styles.link} href="/work/morganStanley">read more →</Link>
                        </div>
                        <hr></hr>
                    </div>
                    <div className={styles.jobs}>
                        <Link className={styles.jobTitle} href="/work/morganStanley"><h3 className={styles.jobTitle}>Technology Analyst</h3></Link>
                        <div className={styles.jobDetail}>
                            <p>Morgan Stanley | Montreal, QC</p>
                            <p>January 2023 - August 2023</p>   
                        </div>
                        <p className={styles.jobDescription}>
                            This is my second coop term. The job mainly involved full stack development.
                            I get chance to learn and familarise the software development life cycle. 
                            The technology used are AngularJS, Java and DB2. 
                        </p>
                        <div className={styles.container}>
                            <Link className={styles.link} href="/work/morganStanley">read more →</Link>
                        </div>
                        <hr></hr>
                    </div>

                    <div className={styles.jobs}>
                        <Link className={styles.jobTitle} href="/work/uottawa"><h3 className={styles.jobTitle}>Web Developer</h3></Link>
                        <div className={styles.jobDetail}>
                            <p>uOttawa | Ottawa, ON</p>
                            <p>May 2022 - December 2022</p>   
                        </div>
                        <p className={styles.jobDescription}>
                        This is my first coop term. It transformed the University of Ottawa IT department website from an old version to a new version by using Drupal9. From the job, I gained lots of knowledge related to user experience and user interface. 
                        </p>
                        <div className={styles.container}>
                            <Link className={styles.link} href="/work/morganStanley">read more →</Link>
                        </div>
                        <hr></hr>
                    </div>

                    <div className={styles.jobs}>
                        <Link className={styles.jobTitle} href="/work/uottawaIT"><h3 className={styles.jobTitle}>IT support Technician</h3></Link>
                        <div className={styles.jobDetail}>
                            <p>uOttawa | Ottawa, ON</p>
                            <p>September 2021 - April 2022</p>   
                        </div>
                        <p className={styles.jobDescription}>
                        My part-time job during my first year of university study. Throughout the job, I experimented with lots of tasks related to computer hardware, such as computer decommission and disposal process, computer reboot, and installing new computers for school labs. 
                        </p>
                        <div className={styles.container}>
                            <Link className={styles.link} href="/work/morganStanley">read more →</Link>
                        </div>
                        <hr></hr>
                    </div>
            </div>



        </Layout>
    ); 
}