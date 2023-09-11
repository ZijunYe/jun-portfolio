import Head from 'next/head';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zijun Portfolio</title>
        <link rel="icon" href="/ZijunYe.ico" />
      </Head>

      <div className={styles.intro}>
        <div className={styles.links}>
          {/* 1. Github link 
          2. linkedin Link 
          3. email  */}
          <a class="link" href="https://www.linkedin.com/in/zijunye/">LinkedIn</a>
          <a class="link" href="https://github.com/ZijunYe">Github</a>
          <a class="link" href="mailto:zye072@uottawa.ca">email</a>
        </div>
          <h2>Hi there, I am <span>Zijun</span>!</h2>
          <p>
          I’m 4th year computer science student at uOttawa. <br/>
          I just wrapped up my internship at Morgan Stanley and currently working at Trend Micro.
          I love crafting user interface as well as developing software for web/mobile! 
          Outside of work, you will most likely find me running, baking or seeking good places to eat;)
          </p>
          {/* Navigation Bar 
            work / Reading / Running Journal / Projects / Baked Goods / Place I lived on / photograph
          */}

          <h3 className={styles.links}><Link href="/work/first-job">Work</Link></h3>


      </div>
    </div>
  );
}
