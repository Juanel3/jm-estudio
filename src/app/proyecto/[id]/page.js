"use client";

import Image from "next/image";
import styles from "./proyecto.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { 
  ArrowBack,
  GitHub,
  CalendarToday,
  Person,
  Work,
  Description,
  CheckCircle
} from "@mui/icons-material";
import Link from "next/link";
import { projects } from "../../data/projects";
import { use } from "react";

export default function ProyectoDetalle({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  
  // Buscar el proyecto por ID
  const proyecto = projects.find(p => p.id === parseInt(resolvedParams.id));
  
  // Si no se encuentra el proyecto, mostrar error
  if (!proyecto) {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.errorContent}>
          <h1>Proyecto no encontrado</h1>
          <Link href="/portafolio" className={styles.backLink}>
            <ArrowBack />
            <span className={styles.backTextDesktop}>Volver al Portafolio</span>
            <span className={styles.backTextMobile}>Volver</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />


      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={proyecto.image}
            alt={proyecto.title}
            width={1200}
            height={600}
            className={styles.heroImageFile}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <div className={styles.categoryTag}>{proyecto.categoryName}</div>
              <h1 className={styles.heroTitle}>{proyecto.title}</h1>
              <p className={styles.heroSubtitle}>{proyecto.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className={styles.details}>
        <div className={styles.detailsContent}>
          <div className={styles.detailsGrid}>
            {/* Información del proyecto */}
            <div className={styles.projectInfo}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Información del proyecto</h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <CalendarToday />
                    <span><strong>Fecha:</strong> {proyecto.date}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Person />
                    <span><strong>Cliente:</strong> {proyecto.client}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <Work />
                    <span><strong>Categoría:</strong> {proyecto.categoryName}</span>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Tecnologías utilizadas</h3>
                <div className={styles.technologies}>
                  {proyecto.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Contenido principal */}
            <div className={styles.mainContent}>
              <div className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Desafío</h2>
                <p className={styles.sectionText}>{proyecto.challenge}</p>
              </div>

              <div className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Solución</h2>
                <p className={styles.sectionText}>{proyecto.solution}</p>
              </div>

              <div className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Resultados obtenidos</h2>
                <div className={styles.resultsList}>
                  {proyecto.results.map((result, index) => (
                    <div key={index} className={styles.resultItem}>
                      <CheckCircle />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.galleryContent}>
          <h2 className={styles.sectionTitle}>Galería</h2>
          <div className={styles.galleryGrid}>
            {proyecto.gallery.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image}
                  alt={`${proyecto.title} - Imagen ${index + 1}`}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>¿Tienes un proyecto similar?</h2>
          <p className={styles.contactSubtitle}>Contáctanos y hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos.</p>
          <ContactForm />
        </div>
      </section>

      {/* Back to Portfolio Button */}
      <section className={styles.backSection}>
        <div className={styles.backContent}>
          <Link href="/portafolio" className={styles.backLink}>
            <ArrowBack />
            <span className={styles.backTextDesktop}>Volver al Portafolio</span>
            <span className={styles.backTextMobile}>Volver</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
