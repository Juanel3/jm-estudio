"use client";

import Image from "next/image";
import styles from "./portafolio.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowForward
} from "@mui/icons-material";
import { projects, categories } from "../data/projects";

export default function Portafolio() {
  const [activeFilter, setActiveFilter] = useState('web');

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Nuestro trabajo habla por nosotros</h1>
          <p className={styles.heroSubtitle}>
            Estos son algunos de los proyectos y campañas que hemos desarrollado para nuestros clientes.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filters}>
        <div className={styles.filtersContent}>
          <div className={styles.filterButtons}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioContent}>
          <div className={styles.portfolioGrid}>
            {filteredProjects.map(project => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.projectImageFile}
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <Link href={`/proyecto/${project.id}`} className={styles.projectButton}>
                    <ArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
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
            
            <div className={styles.contactFormContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
