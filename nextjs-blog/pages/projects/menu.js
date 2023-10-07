import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './project-menu.module.css'; 
export default function ProjectMenu(){
    return(
        <Layout>
            <h1 className={styles.bigTitle}>Projects</h1>
            <img src= "/graphic/LineMarker.svg" alt="Underline" className={styles.underline}/>
            <div className={styles.box}>

            </div>
        </Layout>
    ); 
}