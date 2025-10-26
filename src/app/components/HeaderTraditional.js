import Image from "next/image";
import styles from "./HeaderTraditional.module.css";

export default function HeaderTraditional() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Image 
            src="/jm.png" 
            alt="JM Estudio Logo" 
            width={50} 
            height={35} 
            className={styles.logoImage}
          />
        </div>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Inicio</a>
          <a href="/nosotros" className={styles.navLink}>Nosotros</a>
          <a href="/servicios" className={styles.navLink}>Servicios</a>
          <a href="/#portafolio" className={styles.navLink}>Portafolio</a>
        </nav>
      </div>
    </header>
  );
}








