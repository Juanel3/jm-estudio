import { NextResponse } from 'next/server';
import { insertContact, getAllContacts, getContactById, updateContactStatus, deleteContact } from '../../utils/contacts.js';

// POST - Crear nuevo contacto
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.nombre || !body.email || !body.mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, email, mensaje' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    const contactData = {
      nombre: body.nombre.trim(),
      email: body.email.trim().toLowerCase(),
      telefono: body.telefono?.trim() || null,
      mensaje: body.mensaje.trim()
    };

    const newContact = await insertContact(contactData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contacto enviado exitosamente',
        contact: newContact 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error en POST /api/contactos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// GET - Obtener todos los contactos (para administración)
export async function GET(request) {
  try {
    const contacts = await getAllContacts();
    
    return NextResponse.json(
      { 
        success: true, 
        contacts 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error en GET /api/contactos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
