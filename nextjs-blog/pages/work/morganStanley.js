import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './work.module.css';

export default function MorganStanley(){
    return(
        <Layout>
        
            
            <p>Work in progress!</p>
            <Link className={styles.link} href="/work/menu">Check more work Experience →</Link>
            


            
        </Layout>
    ); 
}