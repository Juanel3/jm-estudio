# Configuración para Vercel

## Variables de Entorno

### Desarrollo Local
1. Copia `env.example` a `.env`:
```bash
cp env.example .env
```

2. Edita `.env` con tus datos locales:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos"
NODE_ENV="development"
```

### Producción en Vercel

#### Opción 1: Dashboard de Vercel (Recomendado)
1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Ve a **Settings** → **Environment Variables**
3. Agrega las variables:
   - `DATABASE_URL` = tu URL de base de datos de producción
   - `NODE_ENV` = `production`
   - Cualquier otra variable que necesites

#### Opción 2: CLI de Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Agregar variables de entorno
vercel env add DATABASE_URL
vercel env add NODE_ENV
```

## Bases de Datos Recomendadas para Vercel

### 1. Vercel Postgres (Integrado)
```bash
# Instalar
npm install @vercel/postgres

# Variables automáticas:
# POSTGRES_URL
# POSTGRES_PRISMA_URL
# POSTGRES_URL_NON_POOLING
# POSTGRES_USER
# POSTGRES_HOST
# POSTGRES_PASSWORD
# POSTGRES_DATABASE
```

### 2. PlanetScale (MySQL)
```bash
npm install @planetscale/database
```

### 3. MongoDB Atlas
```bash
npm install mongodb
```

### 4. Supabase (PostgreSQL)
```bash
npm install @supabase/supabase-js
```

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Deploy a Vercel
vercel

# Deploy con variables específicas
vercel --prod
```

## Notas Importantes

- Las variables con `NEXT_PUBLIC_` son públicas (visibles en el cliente)
- Las variables sin prefijo son privadas (solo en el servidor)
- Vercel automáticamente detecta Next.js y configura el build
- El archivo `vercel.json` es opcional para proyectos Next.js básicos


