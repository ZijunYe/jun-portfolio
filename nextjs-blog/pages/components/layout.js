import styles from './layout.module.css'; 
import NavBar from './navBar';
import { usePathname } from 'next/navigation'; 
import { useState } from 'react'; // Import useState hook

export default function Layout({children}){
    const pathname = usePathname();
    const name = (pathname.split('/'))[1]; 

    // State to track whether the navbar should be visible
    const [navbarVisible, setNavbarVisible] = useState(true);
  
    // Function to toggle navbar visibility
    const toggleNavbar = () => {
        setNavbarVisible(!navbarVisible);
    };

    return (
        <div className={styles.container}>
            <div className={styles.navbar} style={{ display: navbarVisible ? 'block' : 'none' }}>
                <NavBar></NavBar>
            </div>

            <div className={styles.expand} style={{ display: navbarVisible ? 'block' : 'none' }}>
                {/* Add onClick event to the image */}
                <div onClick={toggleNavbar}>
                    <img className={styles.icon} src="/project-icons/Expand_left_double_light.png"></img>
                </div>
                <div className={styles.vertical}></div>
            </div>

            <div className={styles.open} style={{ display: navbarVisible ? 'none' : 'block' }}>
            <div onClick={toggleNavbar}>
                    <img className={styles.icon} src="/project-icons/menu.png"></img>
                </div>

            </div>
            
            <div className={styles.content}>{children}</div>
           
      </div>
     
    );
}
