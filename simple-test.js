// Test simple de conexión
import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
const { Client } = pkg;

async function simpleTest() {
  console.log('🔍 Probando conexión simple...');
  console.log('📋 URL:', process.env.DATABASE_URL ? 'Cargada' : 'No encontrada');
  
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ ¡Conexión exitosa!');
    
    const result = await client.query('SELECT NOW()');
    console.log('🕐 Hora actual:', result.rows[0].now);
    
    await client.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('📋 Código:', error.code);
  }
}

simpleTest();


