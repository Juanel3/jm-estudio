'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import { WhatsApp } from '@mui/icons-material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/api/contactos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
        console.log('Contacto guardado:', result.contact);
      } else {
        setSubmitStatus('error');
        console.error('Error del servidor:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error de conexión:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de JM Estudio');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <input 
            type="text" 
            name="nombre"
            placeholder="Nombre" 
            className={styles.formInput}
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Correo" 
            className={styles.formInput}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input 
          type="tel" 
          name="telefono"
          placeholder="Teléfono (opcional)" 
          className={styles.formInput}
          value={formData.telefono}
          onChange={handleChange}
        />
        <textarea 
          name="mensaje"
          placeholder="Mensaje" 
          className={styles.formTextarea}
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        
        {submitStatus === 'success' && (
          <div className={styles.successMessage}>
            ¡Mensaje enviado correctamente! Te contactaremos pronto.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className={styles.errorMessage}>
            Error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </div>
        )}
      </form>
      
      <div className={styles.whatsappSection}>
        <p className={styles.whatsappText}>Puedes contactarnos en WhatsApp</p>
        <button 
          className={styles.whatsappButton}
          onClick={handleWhatsAppContact}
        >
          <WhatsApp /> Contacto
        </button>
      </div>
    </div>
  );
}
