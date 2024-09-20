import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={`${styles.Navigation} container` }>
        <nav className={styles.nav}>
            <div id={styles.logo}><img src="/images/Frame 2 1.png" alt="unable to load" /></div>
        </nav>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    
  )
}

export default Navigation;