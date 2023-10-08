import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './project-menu.module.css'; 
export default function ProjectMenu(){
    return(
        <Layout>
            <h1 className={styles.bigTitle}>💻Projects</h1>
            {/* <img src= "/graphic/LineMarker.svg" alt="Underline" className={styles.underline}/> */}
            <div className={styles.box}>

                <div className={styles.projects}>
                    <div className={styles.projectTitle}>
                        <h2 className={styles.title}>Edusentia</h2>
                        <p className={styles.text}>Jul 2023</p>
                    </div>
                    <div>
                        <p className={styles.text}>
                            <span className={styles.tools}>Angular</span>
                            <span className={styles.tools}>Typescript</span>
                            <span className={styles.tools}>Python</span>
                            <span className={styles.tools}>Flask</span>
                            <span className={styles.tools}>JSON</span>
                        </p>
                   
                    </div>
                    <p className={styles.text}>
                        This is a full-stack web-based application I made with two of my friends. 
                        It's a sentimental analysis application that benefits both students and the university in tracking course quality and students' feedback. 
                    </p>
                    <div>
                        <a className={styles.icons} href='https://github.com/ZijunYe/Edusentia'><img src= "/project-icons/github.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Souce Code</span></a>
                        <a className={styles.icons} href='https://www.youtube.com/watch?v=R-pi6GH-4dU'><img src= "/project-icons/youtube.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Demo</span></a>
                    </div>

                </div>

                <div className={styles.project}>
                    <div className={styles.projectTitle}>
                        <h2 className={styles.title}>Edusentia</h2>
                        <p className={styles.text}>Jul 2023</p>
                    </div>
                    <div>
                        <p className={styles.text}>
                            <span className={styles.tools}>Angular</span>
                            <span className={styles.tools}>Typescript</span>
                            <span className={styles.tools}>Python</span>
                            <span className={styles.tools}>Flask</span>
                            <span className={styles.tools}>JSON</span>
                        </p>
                   
                    </div>
                    <p className={styles.text}>
                        This is a full-stack web-based application I made with two of my friends. 
                        It's a sentimental analysis application that benefits both students and the university in tracking course quality and students' feedback. 
                    </p>
                    <div>
                        <a className={styles.icons} href='https://github.com/ZijunYe/Edusentia'><img src= "/project-icons/github.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Souce Code</span></a>
                        <a className={styles.icons} href='https://www.youtube.com/watch?v=R-pi6GH-4dU'><img src= "/project-icons/youtube.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Demo</span></a>
                    </div>

                </div>

            </div>
        </Layout>
    ); 
}