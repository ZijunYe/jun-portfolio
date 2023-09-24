import { useState } from 'react';
import styles from './navbar.module.css'; 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

export default function NavBar(){
    const pathname = usePathname();
    const name = (pathname.split('/'))[1];
    console.log(name); 
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setSelectedLink(linkName);
    };
    
    return <div className={styles.intro}>
        <div className={styles.contact}>
        <a className="link" href="https://www.linkedin.com/in/zijunye/">LinkedIn</a>
        <a className="link" href="https://github.com/ZijunYe">Github</a>
        <a className="link" href="mailto:zye072@uottawa.ca">Email</a>
        </div>
      <h2>Hi there, I am <span className={styles.deco}>Zijun</span>!</h2>
      <p> I’m 4th year computer science student at uOttawa. <br/>
      I just wrapped up my internship at Morgan Stanley and currently working at Trend Micro.
      I love crafting user interface as well as developing software for web/mobile! 
      Outside of work, you will most likely find me running, baking or seeking good places to eat;)
      </p>
      {/* Navigation Bar 
        work / Reading / Running Journal / Projects / Baked Goods / Place I lived on / photograph
      */}

     <h4 className={styles.item}>
        <Link className={name === 'work' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/work/menu" onClick={() => handleLinkClick('work')}>
          Work
        </Link>
        <img src="/work-icon.png" alt="Work Icon" />
      </h4> 

      <h4 className={styles.item}>
        <Link className={name === 'projects' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/projects/menu" onClick={() => handleLinkClick('projects')}>
          Projects
        </Link>
        <img src="/project-icon.png"></img>
      </h4> 

      <h4 className={styles.item}>
        <Link className={name === 'running' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/running/journal" onClick={() => handleLinkClick('run')}>
          Runner Journal
        </Link>
        <img src="/running-icon.png"></img>
      </h4> 

      
      <h4 className={styles.item}>
        <Link className={name === 'reading' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/reading/book" onClick={() => handleLinkClick('read')}>
          Reading
        </Link>
        <img src="/reading-icon.png"></img>
      </h4> 

      <h4 className={styles.item}>
        <Link className={name === 'bake' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/bake/menu" onClick={() => handleLinkClick('bake')}>
          Baked Goods
        </Link>
        <img src="/baking-icon.png"></img>
      </h4> 

      <h4 className={styles.item}>
        <Link className={name === 'place' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/place/menu" onClick={() => handleLinkClick('place')}>
          Place I lived on
        </Link>
        <img src="/place-icon.png"></img>
      </h4> 

      <h4 className={styles.item}>
        <Link className={name === 'photo' ? `${styles.links} ${styles.selectedLink}` : styles.links} href="/photo/menu" onClick={() => handleLinkClick('photo')}>
          Photograph
        </Link>
      <img src="/camera-icon.png"></img>
      </h4>



      {/* <h4 className={styles.links}><Link href="/work/first-job">Work</Link><img src="/work-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/projects/first-job">Projects</Link><img src="/project-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/running/first-job">Runner Journal</Link><img src="/running-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/reading/first-job">Reading</Link><img src="/reading-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/baking/first-job">Baked Goods</Link><img src="/baking-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/place/first-job">Place I lived on</Link><img src="/place-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/photographk/first-job">Photograph</Link><img src="/camera-icon.png"></img></h4> */}
  </div>
}