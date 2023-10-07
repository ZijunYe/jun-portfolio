import Head from 'next/head';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';
import NavBar from './components/navBar';

export default function Home() {
  return (

    <div className={styles.container}>
    

        <div className={styles.intro}>

        <Head>
        <title>Zijun Portfolio</title>
        <link rel="icon" href="/ZijunYe.ico" />
        </Head> 
        <div className={styles.contact}>
        <a className="link" href="https://www.linkedin.com/in/zijunye/">LinkedIn</a>
        <a className="link" href="https://github.com/ZijunYe">Github</a>
        <a className="link" href="mailto:zye072@uottawa.ca">Email</a>
        </div>

        <div className={styles.title}>
            <h2>Hi there, I am Zijun Ye!</h2>
            <img src= "/graphic/NameLineMarker.svg" alt="Underline" className={styles.underline}/>
        </div>


        <div className={styles.introduction}>
        <p> I’m 4th year computer science student at uOttawa. 
        I just wrapped up my internship at Morgan Stanley and currently working at Trend Micro.
        I love crafting user interface as well as developing software for web/mobile! 
        Outside of work, you will most likely find me running, baking or seeking good places to eat;)
        </p>
        <img src= "/graphic/WaveMarker.svg" alt="Underline" className={styles.underline2}/>
        <img src= "/graphic/WaveMarker.svg" alt="Underline" className={styles.underline3}/>
        </div>

        {/* Navigation Bar 
        work / Reading / Running Journal / Projects / Baked Goods / Place I lived on / photograph
        */}

        <div className={styles.nav}>
        <h4 className={styles.item}>
              <Link className={styles.links} href="/work/menu">Work</Link>
              <img src="/work-icon.png" alt="Work Icon" />
            </h4> 
            
        </div>


        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links}  href="/projects/menu">
            Projects
          </Link>
          <img src="/project-icon.png"></img>
        </h4> 

        </div>

        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/running/journal">
            Runner Journal
          </Link>
          <img src="/running-icon.png"></img>
        </h4> 
        
        </div>


        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/reading/book" >
            Reading
          </Link>
          <img src="/reading-icon.png"></img>
        </h4> 

        </div>


        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/bake/menu">
            Baked Goods
          </Link>
          <img src="/baking-icon.png"></img>
        </h4> 
        

        </div>

        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/place/menu">
            Place I lived on
          </Link>
          <img src="/place-icon.png"></img>
        </h4> 
        
        </div>


        <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/photo/menu">
            Photograph
          </Link>
        <img src="/camera-icon.png"></img>
        </h4>
        
        </div>




{/* <h4 className={styles.links}><Link href="/work/first-job">Work</Link><img src="/work-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/projects/first-job">Projects</Link><img src="/project-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/running/first-job">Runner Journal</Link><img src="/running-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/reading/first-job">Reading</Link><img src="/reading-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/baking/first-job">Baked Goods</Link><img src="/baking-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/place/first-job">Place I lived on</Link><img src="/place-icon.png"></img></h4>
<h4 className={styles.links}><Link href="/photographk/first-job">Photograph</Link><img src="/camera-icon.png"></img></h4> */}
</div>
    </div>
  );
}
