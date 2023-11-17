import styles from './layout.module.css'; 
import NavBar from './navBar';
import { usePathname } from 'next/navigation'; 
import { useState,useEffect } from 'react'; // Import useState hook

export default function Layout({children}){
    const pathname = usePathname();
    const name = (pathname.split('/'))[2]; 
    console.log(name); 
    // State to track whether the navbar should be visible
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        if (name === 'menu') {
          setNavbarVisible(true);
        }
      }, [name, setNavbarVisible]);
  
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
                <div className={styles.expandIcon} onClick={toggleNavbar}>
                    <img className={styles.iconV} src="/project-icons/Expand_left_double_light.png"></img>
                    <img className={styles.iconH} src="/project-icons/Expand_up_double_light.png"></img>
                    <div className={styles.horizontal}></div>
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
