import Head from 'next/head';
import { useState } from 'react';
import styles from './navbar.module.css'; 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 

export default function NavBar(){
    const pathname = usePathname();
   
    const name = (pathname.split('/'))[1];
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (linkName) => {
      setSelectedLink(linkName);
    };

    const isLinkActive = (linkName) => {
      return linkName === name || linkName === selectedLink;
    };

    return <div className={styles.intro}>

       <Head>
        <title>Zijun Portfolio</title>
        <link rel="icon" href="/ZijunYe.ico" />
      </Head> 

        <div className={styles.topbar}>
          <div className={styles.contact}>
            <a className="link" href="https://www.linkedin.com/in/zijunye/">LinkedIn</a>
            <a className="link" href="https://github.com/ZijunYe">Github</a>
            <a className="link" href="mailto:zye072@uottawa.ca">Email</a>
          </div>
        </div>
        
        <div className={styles.title}>
            <h2>Hi there, I am <span className={styles.highlight}>Zijun Ye</span>!</h2>

        </div>
      <div className={styles.introduction}>
        <p> I’m 4th year computer science student at uOttawa. 
        I just wrapped up my internship at <Link className={styles.links} href="/work/morganStanley">Morgan Stanley</Link> and currently working at <Link className={styles.links} href="/work/trendmicro">Trend Micro</Link>.
        I love crafting user interface as well as developing software for web/mobile! 
        Outside of work, you will most likely find me <Link className={styles.links} href="/running/journal">running</Link>, <Link className={styles.links} href="/bake/menu">baking</Link> or seeking good places to eat;)
        </p>
        {/* <img src= "/graphic/WaveMarker.svg" alt="Underline" className={styles.underline2}/>
        <img src= "/graphic/WaveMarker.svg" alt="Underline" className={styles.underline3}/> */}
      </div>
      
  

    <div className={styles.nav}>
        <h4 className={styles.item}>
        <Link className={styles.link} href="/work/menu">Work</Link>
        {name != 'work' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='work' ? 'visible' : 'hidden', 
          }}
         />
        </h4>
      </div>

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link}  href="/projects/menu">
            Projects
          </Link>
          {name != 'projects' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='projects' ? 'visible' : 'hidden', 
          }}
         />
  
        </h4> 
        {/* {name === 'projects' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle2}/>} */}
      </div>

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link} href="/running/menu">
            Runner Journal
          </Link>
          {name != 'running' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='running' ? 'visible' : 'hidden', 
          }}
         />
        </h4> 
        {/* {name === 'running' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle3}/>} */}
      </div>
      

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link} href="/reading/book" >
            Reading
          </Link>
          {name != 'reading' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='reading' ? 'visible' : 'hidden', 
          }}
         />
        </h4> 
        {/* {name === 'reading' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle4}/>} */}
      </div>
      
      
      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link} href="/bake/menu">
            Baked Goods
          </Link>
          {name != 'bake' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='bake' ? 'visible' : 'hidden', 
          }}
         />
        </h4> 
        {/* {name === 'bake' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle5}/>} */}

      </div>
      
      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link} href="/place/menu">
            Place I lived on
          </Link>
          {name != 'place' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='place' ? 'visible' : 'hidden', 
          }}
         />
        </h4> 
        {/* {name === 'place' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle6}/>} */}
      </div>
      

      <div className={styles.nav}>
        <h4 className={styles.item}>
          <Link className={styles.link} href="/photo/menu">
            Photograph
          </Link>
          {name != 'photo' && <img src="/flower.png" className={styles.flower} />}
         <img src="/flower.png"  
          style={{
            visibility: name=='photo' ? 'visible' : 'hidden', 
          }}
         />
        </h4>
        {/* {name==='photo' && <img src= "/graphic/OvalMarker.svg" alt="circle" className={styles.circle7}/>} */}
      </div>
    
  </div>
  
}