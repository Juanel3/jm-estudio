import Image from "next/image";
import Link from "next/link";
import styles from "./servicios.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Computer, 
  CameraAlt, 
  Smartphone, 
  DesignServices,
  Check
} from "@mui/icons-material";

export default function Servicios() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Nuestros servicios</h1>
          <p className={styles.heroSubtitle}>
            Soluciones de marketing digital diseñadas para hacer crecer tu negocio.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <h2 className={styles.sectionTitle}>Servicios</h2>
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

      {/* Plans Section */}
      <section className={styles.plans}>
        <div className={styles.plansContent}>
          <h2 className={styles.sectionTitle}>Planes</h2>
          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <h3 className={styles.planTitle}>Básico</h3>
              <p className={styles.planDescription}>
                Ideal para negocios pequeños que empiezan en el mundo digital
              </p>
              <div className={styles.planPrice}>
                <span className={styles.originalPrice}>$4,999</span>
                <span className={styles.currentPrice}>$4,000</span>
              </div>
              <button className={styles.planButton}>Contratar</button>
              <ul className={styles.planFeatures}>
                <li><Check /> 8 publicaciones mensuales en redes sociales (Facebook & Instagram)</li>
                <li><Check /> Diseño gráfico básico para redes sociales</li>
                <li><Check /> Configuración de campañas Meta Ads (sin gastos de publicidad)</li>
                <li><Check /> Reporte mensual de rendimiento</li>
              </ul>
            </div>

            <div className={styles.planCard}>
              <div className={styles.popularLabel}>Más comprado</div>
              <h3 className={styles.planTitle}>Profesional</h3>
              <p className={styles.planDescription}>
                Perfecto para negocios en crecimiento que necesitan mayor visibilidad
              </p>
              <div className={styles.planPrice}>
                <span className={styles.originalPrice}>$9,999</span>
                <span className={styles.currentPrice}>$9,000</span>
              </div>
              <button className={styles.planButton}>Contratar</button>
              <ul className={styles.planFeatures}>
                <li><Check /> 15 publicaciones en redes sociales (Facebook, Instagram, LinkedIn)</li>
                <li><Check /> Estrategia de contenido y calendario mensual</li>
                <li><Check /> Optimización básica SEO en tu sitio web</li>
                <li><Check /> Campañas Meta Ads y Google Ads (sin gastos de publicidad)</li>
                <li><Check /> Reporte quincenal con métricas</li>
              </ul>
            </div>

            <div className={styles.planCard}>
              <h3 className={styles.planTitle}>Empresarial</h3>
              <p className={styles.planDescription}>
                Diseñado para empresas que quieren un crecimiento acelerado
              </p>
              <div className={styles.planPrice}>
                <span className={styles.originalPrice}>$14,999</span>
                <span className={styles.currentPrice}>$14,000</span>
              </div>
              <button className={styles.planButton}>Contratar</button>
              <ul className={styles.planFeatures}>
                <li><Check /> 25 publicaciones en redes sociales</li>
                <li><Check /> Community Manager dedicado</li>
                <li><Check /> Optimización SEO avanzada</li>
                <li><Check /> Branding y diseño avanzado</li>
                <li><Check /> Reporte semanal y reunión de seguimiento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground}></div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>¿Listo para llevar tu marca al siguiente nivel?</h2>
          <Link href="/#contacto" className={styles.ctaButton}>Contáctanos</Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
