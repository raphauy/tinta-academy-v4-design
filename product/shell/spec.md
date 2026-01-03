# Application Shell Specification

## Overview
Tinta Academy utiliza shells separados según el rol del usuario, optimizando la experiencia para cada tipo de usuario. Todos los shells autenticados usan un patrón de sidebar izquierdo con navegación vertical.

## Navigation Structure
- **Preview** → Vista actual en preview
- **Mis Cursos** → Dashboard con cursos inscritos
- **Órdenes** → Historial de compras

## Shells por Rol

### 1. Shell Público (PublicShell)
Para visitantes no autenticados en la landing y catálogo.

**Layout:** Header horizontal simple
**Navegación:**
- **Logo** (izquierda) → Home
- **Cursos** → Catálogo
- **Sobre WSET** → Info WSET
- **Contacto** → Formulario de contacto
- **Iniciar Sesión** (botón secundario)
- **Registrarse** (botón primario)

**Responsive:**
- Desktop: Header completo visible
- Mobile: Logo + menú hamburguesa

---

### 2. Shell Alumno (StudentShell)
Para alumnos autenticados.

**Layout:** Sidebar izquierdo fijo (240px) + área de contenido
**Navegación Sidebar:**
- **Logo Tinta Academy** (arriba)
- **Mis Cursos** → Dashboard con cursos inscritos
- **Continuar Aprendiendo** → Último curso/lección
- **Calendario** → Fechas de cursos presenciales
- **Mi Progreso** → Estadísticas de avance
- **Mis Datos** → Perfil y datos personales
- ---
- **Menú Usuario** (abajo) → Avatar, nombre, cerrar sesión

**Responsive:**
- Desktop: Sidebar visible, contenido al lado
- Tablet: Sidebar colapsable (solo iconos)
- Mobile: Sidebar oculto, hamburguesa en header

---

### 3. Shell Educador (EducatorShell)
Para educadores que gestionan cursos.

**Layout:** Sidebar izquierdo fijo (240px) + área de contenido
**Navegación Sidebar:**
- **Logo Tinta Academy** (arriba)
- **Dashboard** → Resumen general
- **Mis Cursos** → Lista de cursos creados
- **Crear Curso** → Wizard de creación
- **Alumnos** → Lista de alumnos inscritos
- **Comunicaciones** → Templates y envío de emails
- **Estadísticas** → Métricas de cursos
- ---
- **Menú Usuario** (abajo) → Avatar, nombre, cambiar a alumno, cerrar sesión

**Responsive:**
- Desktop: Sidebar visible
- Tablet: Sidebar colapsable
- Mobile: Hamburguesa

---

### 4. Shell Admin (AdminShell)
Para administradores con acceso total.

**Layout:** Sidebar izquierdo fijo (260px) + área de contenido
**Navegación Sidebar:**
- **Logo Tinta Academy** (arriba)
- **Dashboard** → Métricas generales
- **Cursos**
  - Todos los Cursos
  - Crear Curso
- **Usuarios**
  - Alumnos
  - Educadores
  - Administradores
- **Órdenes** → Gestión de pagos
- **Cupones** → Gestión de descuentos
- **Datos Bancarios** → Cuentas para transferencias
- **Comunicaciones**
  - Templates
  - Historial de Envíos
- **Configuración** → Settings generales
- ---
- **Menú Usuario** (abajo) → Avatar, nombre, cerrar sesión

**Responsive:**
- Desktop: Sidebar expandido
- Tablet: Sidebar colapsable
- Mobile: Hamburguesa

---

## Design Tokens Aplicados

**Colores (de la guía de Tinta):**
- Primary (verde-uva): `#143F3B` — Logo, items activos, botones primarios
- Secondary (paper): `#EBEBEB` — Fondos claros, hovers
- Neutral (gris-tinta): `#2E2E2E` — Texto, bordes

**Tipografía:**
- Heading: Geist (semibold) — Títulos, nav items
- Body: Geist (regular) — Texto general
- Mono: IBM Plex Mono — Código, datos técnicos

---

## Componentes Compartidos

### UserMenu
- Avatar del usuario (imagen o iniciales)
- Nombre completo
- Dropdown con: Ver perfil, Cambiar rol (si aplica), Cerrar sesión

### MobileNav
- Header con logo y hamburguesa
- Drawer lateral con navegación completa
- Overlay oscuro al abrir

### Breadcrumb (opcional)
- Para navegación profunda dentro de cursos/módulos/lecciones

---

## Transiciones entre Shells

- Al iniciar sesión → Redirigir al shell según rol principal
- Educador puede "Ver como alumno" → Cambio temporal a StudentShell
- Admin tiene acceso a todos los shells mediante selector de vista
