import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './work.module.css';

export default function MorganStanley(){
    return(
        <Layout>
            <h1>Morgan Stanley</h1>
            
            <p>working progress</p>
            <Link className={styles.link} href="/work/menu">Check more work Experience →</Link>
            


            
        </Layout>
    ); 
}