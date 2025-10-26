// Script para probar la conexión a la base de datos
import dotenv from 'dotenv';
dotenv.config();

import { testConnection } from './src/app/utils/database.js';
import { createExampleTable, insertExampleProject, getAllProjects } from './src/app/utils/projects.js';

async function testDatabase() {
  console.log('🔍 Probando conexión a la base de datos...\n');
  console.log('📋 DATABASE_URL:', process.env.DATABASE_URL ? '✅ Cargada' : '❌ No encontrada');
  
  // 1. Probar conexión
  const connectionOk = await testConnection();
  if (!connectionOk) {
    console.log('❌ No se pudo conectar a la base de datos');
    return;
  }
  
  // 2. Crear tabla de ejemplo
  console.log('\n📋 Creando tabla de ejemplo...');
  await createExampleTable();
  
  // 3. Insertar proyecto de ejemplo
  console.log('\n➕ Insertando proyecto de ejemplo...');
  await insertExampleProject();
  
  // 4. Obtener todos los proyectos
  console.log('\n📖 Obteniendo todos los proyectos...');
  const projects = await getAllProjects();
  console.log('Proyectos encontrados:', projects);
  
  console.log('\n✅ ¡Prueba de base de datos completada exitosamente!');
}

// Ejecutar la prueba
testDatabase().catch(console.error);
