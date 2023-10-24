import Head from 'next/head';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';
import NavBar from './components/navBar';

export default function Home() {
  return (

    <div className={styles.container}>
      <NavBar></NavBar>
    </div>
  );
}
