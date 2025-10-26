// Funciones para manejar contactos en la base de datos
import dotenv from 'dotenv';
dotenv.config();

import { query } from './database.js';

// Función para crear la tabla de contactos
export async function createContactTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contactos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefono VARCHAR(20),
        mensaje TEXT NOT NULL,
        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        estado VARCHAR(50) DEFAULT 'nuevo'
      );
    `;
    
    await query(createTableQuery);
    console.log('✅ Tabla "contactos" creada exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error creando tabla de contactos:', error);
    return false;
  }
}

// Función para insertar un nuevo contacto
export async function insertContact(contactData) {
  try {
    const insertQuery = `
      INSERT INTO contactos (nombre, email, telefono, mensaje)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    
    const values = [
      contactData.nombre,
      contactData.email,
      contactData.telefono || null,
      contactData.mensaje
    ];
    
    const result = await query(insertQuery, values);
    console.log('✅ Contacto insertado:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error insertando contacto:', error);
    throw error;
  }
}

// Función para obtener todos los contactos
export async function getAllContacts() {
  try {
    const result = await query('SELECT * FROM contactos ORDER BY fecha_creacion DESC');
    return result.rows;
  } catch (error) {
    console.error('❌ Error obteniendo contactos:', error);
    return [];
  }
}

// Función para obtener un contacto por ID
export async function getContactById(id) {
  try {
    const result = await query('SELECT * FROM contactos WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error obteniendo contacto:', error);
    return null;
  }
}

// Función para actualizar el estado de un contacto
export async function updateContactStatus(id, estado) {
  try {
    const result = await query(
      'UPDATE contactos SET estado = $1 WHERE id = $2 RETURNING *',
      [estado, id]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error actualizando estado del contacto:', error);
    throw error;
  }
}

// Función para eliminar un contacto
export async function deleteContact(id) {
  try {
    const result = await query('DELETE FROM contactos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error eliminando contacto:', error);
    throw error;
  }
}
