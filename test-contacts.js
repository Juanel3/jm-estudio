// Script para probar la tabla de contactos
import dotenv from 'dotenv';
dotenv.config();

import { createContactTable, insertContact, getAllContacts } from './src/app/utils/contacts.js';

async function testContacts() {
  console.log('🔍 Probando tabla de contactos...\n');
  
  // 1. Crear tabla de contactos
  console.log('📋 Creando tabla de contactos...');
  await createContactTable();
  
  // 2. Insertar contacto de ejemplo
  console.log('\n➕ Insertando contacto de ejemplo...');
  const contactData = {
    nombre: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    telefono: '+52 123 456 7890',
    mensaje: 'Hola, me interesa conocer más sobre sus servicios de desarrollo web.'
  };
  
  await insertContact(contactData);
  
  // 3. Obtener todos los contactos
  console.log('\n📖 Obteniendo todos los contactos...');
  const contacts = await getAllContacts();
  console.log('Contactos encontrados:', contacts);
  
  console.log('\n✅ ¡Prueba de contactos completada exitosamente!');
}

// Ejecutar la prueba
testContacts().catch(console.error);
