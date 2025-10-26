import Image from "next/image";
import Link from "next/link";
import styles from "./nosotros.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Star,
  EmojiEmotions,
  TrendingUp,
  Public
} from "@mui/icons-material";

export default function Nosotros() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Conoce quiénes somos</h1>
          <p className={styles.heroSubtitle}>
            Una agencia de marketing digital apasionada por ayudar a las marcas a crecer en el mundo digital
          </p>
        </div>
        <div className={styles.heroVideoContainer}>
          <video 
            className={styles.heroVideo}
            controls
            loop
            muted
            playsInline
          >
            <source src="/prvio.mov" type="video/quicktime" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Historia Section */}
      <section className={styles.historia}>
        <div className={styles.historiaContent}>
          <div className={styles.historiaGrid}>
            <div className={styles.historiaImage}>
              <Image 
                src="/2.jpg" 
                alt="Equipo de JM Estudio trabajando" 
                width={500} 
                height={400} 
                className={styles.historiaImageFile}
              />
            </div>
            <div className={styles.historiaText}>
              <h2 className={styles.sectionTitleLeft}>Historia</h2>
              <p className={styles.historiaDescription}>
                En JM Estudio tenemos un objetivo claro: ayudar a las marcas a crecer en el mundo digital. 
                Combinamos creatividad, estrategia y tecnología para diseñar campañas que convierten, 
                posicionándonos como tu socio estratégico en el crecimiento de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores Section */}
      <section className={styles.misionVision}>
        <div className={styles.misionVisionContent}>
          <div className={styles.misionVisionGrid}>
            <div className={styles.misionCard}>
              <h3 className={styles.cardTitle}>Misión</h3>
              <p className={styles.cardDescription}>
                Impulsar el crecimiento de los negocios a través de estrategias digitales efectivas, 
                medibles y creativas que generen resultados tangibles para nuestros clientes.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3 className={styles.cardTitle}>Visión</h3>
              <p className={styles.cardDescription}>
                Ser la agencia de marketing digital líder reconocida por su innovación, 
                transparencia y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            <div className={styles.valoresCard}>
              <h3 className={styles.cardTitle}>Valores</h3>
              <p className={styles.cardDescription}>
                Innovación, transparencia, compromiso, creatividad y trabajo en equipo son los pilares 
                que nos guían para ofrecer siempre la mejor experiencia a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? Section */}
      <section className={styles.porQueElegirnos}>
        <div className={styles.porQueElegirnosContent}>
          <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Star />
              </div>
              <div className={styles.statNumber}>+2</div>
              <div className={styles.statText}>años de experiencia en marketing digital</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <EmojiEmotions />
              </div>
              <div className={styles.statNumber}>+80</div>
              <div className={styles.statText}>clientes satisfechos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <TrendingUp />
              </div>
              <div className={styles.statNumber}>+200</div>
              <div className={styles.statText}>campañas exitosas en redes sociales</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Public />
              </div>
              <div className={styles.statNumber}>Presencia</div>
              <div className={styles.statText}>en México y Latinoamérica</div>
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
