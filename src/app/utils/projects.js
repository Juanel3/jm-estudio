// Ejemplo de uso de la base de datos
import dotenv from 'dotenv';
dotenv.config();

import { testConnection, query } from './database.js';

// Función para crear una tabla de ejemplo
export async function createExampleTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS proyectos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        descripcion TEXT,
        imagen_url VARCHAR(500),
        tecnologias TEXT[],
        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await query(createTableQuery);
    console.log('✅ Tabla "proyectos" creada exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error creando tabla:', error);
    return false;
  }
}

// Función para insertar un proyecto de ejemplo
export async function insertExampleProject() {
  try {
    const insertQuery = `
      INSERT INTO proyectos (nombre, descripcion, imagen_url, tecnologias)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    
    const values = [
      'Mi Primer Proyecto',
      'Descripción del proyecto de ejemplo',
      '/imagen.jpg',
      ['React', 'Next.js', 'PostgreSQL']
    ];
    
    const result = await query(insertQuery, values);
    console.log('✅ Proyecto insertado:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error insertando proyecto:', error);
    return null;
  }
}

// Función para obtener todos los proyectos
export async function getAllProjects() {
  try {
    const result = await query('SELECT * FROM proyectos ORDER BY fecha_creacion DESC');
    return result.rows;
  } catch (error) {
    console.error('❌ Error obteniendo proyectos:', error);
    return [];
  }
}

// Función para obtener un proyecto por ID
export async function getProjectById(id) {
  try {
    const result = await query('SELECT * FROM proyectos WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error obteniendo proyecto:', error);
    return null;
  }
}
