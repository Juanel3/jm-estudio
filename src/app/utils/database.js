import { Pool } from 'pg';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Configuración de la base de datos
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Temporalmente sin SSL para probar
});

// Función para probar la conexión
export async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('✅ Conexión exitosa a la base de datos:', result.rows[0]);
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error);
    return false;
  }
}

// Función para ejecutar consultas
export async function query(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error('Error ejecutando consulta:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Función para cerrar la conexión
export async function closeConnection() {
  await pool.end();
}

export default pool;
