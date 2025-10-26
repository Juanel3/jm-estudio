import { NextResponse } from 'next/server';
import { getContactById, updateContactStatus, deleteContact } from '../../../utils/contacts.js';

// GET - Obtener contacto por ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { error: 'ID de contacto inválido' },
        { status: 400 }
      );
    }

    const contact = await getContactById(parseInt(id));
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contacto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        contact 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error en GET /api/contactos/[id]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - Actualizar estado del contacto
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { error: 'ID de contacto inválido' },
        { status: 400 }
      );
    }

    if (!body.estado) {
      return NextResponse.json(
        { error: 'Estado requerido' },
        { status: 400 }
      );
    }

    const validStates = ['nuevo', 'leido', 'respondido', 'archivado'];
    if (!validStates.includes(body.estado)) {
      return NextResponse.json(
        { error: 'Estado inválido. Estados válidos: nuevo, leido, respondido, archivado' },
        { status: 400 }
      );
    }

    const updatedContact = await updateContactStatus(parseInt(id), body.estado);
    
    if (!updatedContact) {
      return NextResponse.json(
        { error: 'Contacto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Estado actualizado exitosamente',
        contact: updatedContact 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error en PUT /api/contactos/[id]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar contacto
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { error: 'ID de contacto inválido' },
        { status: 400 }
      );
    }

    const deletedContact = await deleteContact(parseInt(id));
    
    if (!deletedContact) {
      return NextResponse.json(
        { error: 'Contacto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contacto eliminado exitosamente',
        contact: deletedContact 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error en DELETE /api/contactos/[id]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
