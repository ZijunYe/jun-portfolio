import Head from 'next/head';
import { useState } from 'react';
import styles from './navbar.module.css'; 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
// import underlineSVG from '../../public/graphic/LineMarker.svg'; 
// import i from '/graphic/LineMarker.svg';

export default function NavBar(){
    const pathname = usePathname();
    const name = (pathname.split('/'))[1];
    console.log(name); 
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setSelectedLink(linkName);
    };
    
    return <div className={styles.intro}>

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
            {/* <img src= "/graphic/LineMarker.svg" alt="Underline" className={styles.underline}/>  */}

        </div>
     
      <p> I’m 4th year computer science student at uOttawa. 
      I just wrapped up my internship at Morgan Stanley and currently working at Trend Micro.
      I love crafting user interface as well as developing software for web/mobile! 
      Outside of work, you will most likely find me running, baking or seeking good places to eat;)
      </p>
      {/* Navigation Bar 
        work / Reading / Running Journal / Projects / Baked Goods / Place I lived on / photograph
      */}

      <div className={styles.nav}>
        <h4 className={styles.item}>
              <Link className={styles.links} href="/work/menu">Work</Link>
              <img src="/work-icon.png" alt="Work Icon" />
            </h4> 
            {name=='work' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle1}/>}
      </div>
     

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links}  href="/projects/menu">
            Projects
          </Link>
          <img src="/project-icon.png"></img>
        </h4> 
        {name === 'projects' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle2}/>}
      </div>

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/running/journal">
            Runner Journal
          </Link>
          <img src="/running-icon.png"></img>
        </h4> 
        {name === 'running' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle3}/>}
      </div>
      

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/reading/book" >
            Reading
          </Link>
          <img src="/reading-icon.png"></img>
        </h4> 
        {name === 'reading' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle4}/>}
      </div>
      
      
      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/bake/menu">
            Baked Goods
          </Link>
          <img src="/baking-icon.png"></img>
        </h4> 
        {name === 'bake' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle5}/>}

      </div>
      
      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/place/menu">
            Place I lived on
          </Link>
          <img src="/place-icon.png"></img>
        </h4> 
        {name === 'place' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle6}/>}
      </div>
      

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.links} href="/photo/menu">
            Photograph
          </Link>
        <img src="/camera-icon.png"></img>
        </h4>
        {name==='photo' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle7}/>}
      </div>
      



      {/* <h4 className={styles.links}><Link href="/work/first-job">Work</Link><img src="/work-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/projects/first-job">Projects</Link><img src="/project-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/running/first-job">Runner Journal</Link><img src="/running-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/reading/first-job">Reading</Link><img src="/reading-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/baking/first-job">Baked Goods</Link><img src="/baking-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/place/first-job">Place I lived on</Link><img src="/place-icon.png"></img></h4>
      <h4 className={styles.links}><Link href="/photographk/first-job">Photograph</Link><img src="/camera-icon.png"></img></h4> */}
  </div>
  
}