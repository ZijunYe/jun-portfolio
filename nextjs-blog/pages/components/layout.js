import styles from './layout.module.css'; 
import NavBar from './navBar';

export default function Layout({children}){
    return (
    <div className={styles.container}>
        <NavBar></NavBar>
        <div className={styles.vertical}></div>
        <div className={styles.content}>{children}</div>
    </div>
        
    );
}