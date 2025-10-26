# Componentes Header - JM Estudio

## Disponibles:

### 1. Header Flotante (Actual)
**Archivo:** `Header.js` y `Header.module.css`
- ✅ Header circular flotante
- ✅ Transparencia y efecto blur avanzado
- ✅ Posicionado a 20px del top
- ✅ Centrado horizontalmente
- ✅ Efectos hover elegantes
- ✅ Diseño moderno glassmorphism

### 2. Header Tradicional
**Archivo:** `HeaderTraditional.js` y `HeaderTraditional.module.css`
- ✅ Header fijo en la parte superior
- ✅ Ancho completo de la pantalla
- ✅ Fondo negro semi-transparente
- ✅ Efecto blur básico
- ✅ Diseño clásico y profesional

## Cómo cambiar entre headers:

### Para usar Header Flotante (actual):
```javascript
import Header from "./components/Header";
// Usar: <Header />
```

### Para usar Header Tradicional:
```javascript
import HeaderTraditional from "./components/HeaderTraditional";
// Usar: <HeaderTraditional />
```

## Espaciado requerido:

### Con Header Flotante:
- ✅ Las páginas NO necesitan padding-top adicional
- ✅ El contenido puede empezar desde arriba

### Con Header Tradicional:
- ⚠️ Las páginas necesitan padding-top: 80px o margin-top: 80px
- ⚠️ Para evitar que el contenido quede debajo del header

## Cambios necesarios si usas Header Tradicional:

1. **En cada página (page.js, nosotros/page.js, servicios/page.js):**
   ```javascript
   // Cambiar esta línea:
   import Header from "../components/Header";
   // Por esta:
   import HeaderTraditional from "../components/HeaderTraditional";
   
   // Y cambiar:
   <Header />
   // Por:
   <HeaderTraditional />
   ```

2. **Agregar espaciado en los CSS:**
   ```css
   .hero {
     padding-top: 80px; /* o margin-top: 80px */
   }
   ```

## Recomendación:
- **Header Flotante**: Para un look más moderno y elegante
- **Header Tradicional**: Para un diseño más clásico y conservador








