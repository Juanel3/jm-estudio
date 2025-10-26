"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Image 
            src="/jm.png" 
            alt="JM Estudio Logo" 
            width={40} 
            height={28} 
            className={styles.logoImage}
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Inicio</a>
          <a href="/nosotros" className={styles.navLink}>Nosotros</a>
          <a href="/servicios" className={styles.navLink}>Servicios</a>
          <a href="/portafolio" className={styles.navLink}>Portafolio</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}>
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <a href="/" className={styles.mobileNavLink} onClick={closeMenu}>Inicio</a>
          <a href="/nosotros" className={styles.mobileNavLink} onClick={closeMenu}>Nosotros</a>
          <a href="/servicios" className={styles.mobileNavLink} onClick={closeMenu}>Servicios</a>
          <a href="/portafolio" className={styles.mobileNavLink} onClick={closeMenu}>Portafolio</a>
        </nav>
      </div>
    </header>
  );
}
