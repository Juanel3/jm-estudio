import Image from "next/image";
import styles from "./page.module.css";
import PortfolioCarousel from "./components/PortfolioCarousel";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { 
  Computer, 
  CameraAlt, 
  Smartphone, 
  DesignServices,
  WhatsApp,
  ArrowForward
} from "@mui/icons-material";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Impulsamos tu marca al siguiente nivel.</h1>
          <p className={styles.heroSubtitle}>Estrategias digitales personalizadas para hacer crecer tu negocio.</p>
          <Link href="/#contacto" className={styles.ctaButton}>Contáctanos</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitleLeft}>Sobre nosotros</h2>
              <p className={styles.aboutDescription}>
                En JM Estudio ayudamos a empresas de todos los tamaños a tener éxito en el mundo digital. 
                Combinamos creatividad, estrategia y tecnología para diseñar campañas que convierten, 
                posicionándonos como tu socio estratégico en el crecimiento de tu negocio.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <Image 
                src="/imagen.jpg" 
                alt="Equipo de JM Estudio trabajando" 
                width={500} 
                height={400} 
                className={styles.aboutImageFile}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className={styles.services}>
        <div className={styles.servicesContent}>
          <h2 className={styles.sectionTitleWhite}>Servicios</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Computer />
              </div>
              <h3 className={styles.serviceTitle}>SEO y Posicionamiento web</h3>
              <p className={styles.serviceDescription}>Haz que tu negocio aparezca en los primeros lugares de Google.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <CameraAlt />
              </div>
              <h3 className={styles.serviceTitle}>Fotografía</h3>
              <p className={styles.serviceDescription}>Captura momentos únicos que conecten con tu audiencia.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Smartphone />
              </div>
              <h3 className={styles.serviceTitle}>Publicidad en Redes Sociales</h3>
              <p className={styles.serviceDescription}>Alcanza tu público objetivo en Facebook, Instagram y TikTok.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <DesignServices />
              </div>
              <h3 className={styles.serviceTitle}>Diseño web</h3>
              <p className={styles.serviceDescription}>Creamos páginas modernas y una identidad de marca sólida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <h2 className={styles.sectionTitle}>Portafolio</h2>
          <PortfolioCarousel />
          <Link href="/portafolio" className={styles.portfolioButton}>Ver todo el portafolio</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={styles.contact}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.contactSubtitle}>Contáctanos por nuestros canales digitales.</p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactImage}>
              <Image 
                src="/contacto.jpg.avif" 
                alt="Persona con tablet y iconos digitales" 
                width={500} 
                height={400} 
                className={styles.contactImageFile}
              />
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
