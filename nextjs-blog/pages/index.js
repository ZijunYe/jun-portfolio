import Head from 'next/head';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (

    <div className={styles.container}>
       <Head>
        <title>Zijun Portfolio</title>
        <link rel="icon" href="/ZijunYe.ico" />
      </Head> 
      {/* <NavBar></NavBar> */}
      {/* 
        - left div 
          - photo changes 
        - right div 
          - text 
          - button jump to next page 
      
      */}

      <div className={styles.left}>

      </div>

      <div className={styles.right}>
        <div className={styles.intro}>
          <p>Welcome to Jun's gallery</p>

        </div>

        <div className={styles.button}>
           <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

    </div>
  );
}
