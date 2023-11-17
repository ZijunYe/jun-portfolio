import styles from './layout.module.css';
import NavBar from './navBar';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Import useState hook

export default function Layout({ children }) {
  const pathname = usePathname();
  const name = (pathname.split('/'))[2];
  console.log(name);
  // State to track whether the navbar should be visible
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [closing, setClosing] = useState(false); // New state to manage closing animation

  useEffect(() => {
    if (name === 'menu') {
      setNavbarVisible(true);
    }
  }, [name, setNavbarVisible]);

  // Function to toggle navbar visibility and closing animation
  const toggleNavbar = () => {
    setClosing(!navbarVisible); // Set closing state before toggling visibility
    setTimeout(() => {
      setNavbarVisible(!navbarVisible);
      setClosing(false);
    }, 500); // Set the timeout duration to match the closeAnimation duration
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar} style={{ display: navbarVisible ? 'flex' : 'none' }}>
        <NavBar></NavBar>

        <div className={styles.expand} onClick={toggleNavbar} style={{ display: navbarVisible ? 'block' : 'none' }}>
          <img className={`${styles.iconV} ${closing ? styles.closing : ''}`} src="/project-icons/Expand_left_double_light.png"></img>
          <img className={styles.iconH} src="/project-icons/Expand_up_double_light.png"></img>
          {/* <div className={styles.horizontal}></div> */}
        </div>
     </div>

      <div className={styles.open} style={{ display: navbarVisible ? 'none' : 'block' }}>
        <div onClick={toggleNavbar}>
          <img className={styles.icon} src="/project-icons/Menu.png"></img>
        </div>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
