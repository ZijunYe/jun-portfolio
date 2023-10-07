import styles from './layout.module.css'; 
import NavBar from './navBar';
import { usePathname } from 'next/navigation'; 

export default function Layout({children}){
    const pathname = usePathname();
    const name = (pathname.split('/'))[1]; 
    return (
    <div className={styles.container}>
        <NavBar></NavBar>
        <div className={styles.vertical}></div>
        <div className={styles.content}>{children}</div>
    </div>
    );
}