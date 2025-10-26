import Image from "next/image";
import { 
  YouTube,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from "@mui/icons-material";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image 
            src="/jm.png" 
            alt="JM Estudio Logo" 
            width={45} 
            height={30} 
            className={styles.footerLogoImage}
          />
        </div>
        <nav className={styles.footerNav}>
          <link href="/" className={styles.footerLink}>Inicio</link>
          <link href="/nosotros" className={styles.footerLink}>Nosotros</link>
          <link href="/servicios" className={styles.footerLink}>Servicios</link>
          <link href="/portafolio" className={styles.footerLink}>Portafolio</link>
        </nav>
        <div className={styles.socialIcons}>
          <YouTube className={styles.socialIcon} />
          <Facebook className={styles.socialIcon} />
          <Twitter className={styles.socialIcon} />
          <Instagram className={styles.socialIcon} />
          <LinkedIn className={styles.socialIcon} />
        </div>
      </div>
    </footer>
  );
}
