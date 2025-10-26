import Image from 'next/image';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import styles from './PortfolioCarousel.module.css';
import { projects } from '../data/projects';

export default function PortfolioCarousel() {
  // Mostrar solo los primeros 3 proyectos
  const portfolioItems = projects.slice(0, 3);

  return (
    <div className={styles.portfolioGrid}>
      {portfolioItems.map((project) => (
        <div key={project.id} className={styles.portfolioCard}>
          <div className={styles.portfolioImage}>
            <Image 
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className={styles.portfolioImageFile}
            />
          </div>
          <h3 className={styles.portfolioTitle}>{project.title}</h3>
          <p className={styles.portfolioDescription}>{project.description}</p>
          <div className={styles.portfolioAction}>
            <Link href={`/proyecto/${project.id}`}>
              <ArrowForward className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}