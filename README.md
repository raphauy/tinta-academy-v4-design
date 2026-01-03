# Tinta Academy

Plataforma integral de educación que combina cursos presenciales y online. Como **Approved Programme Provider de WSET**, Tinta Academy ofrece formación especializada en vinos con la flexibilidad de aprender a tu ritmo o en experiencias presenciales guiadas por expertos.

## Tech Stack

- **React 19** con TypeScript
- **Vite 7** para desarrollo y build
- **TailwindCSS 4** para estilos
- **Radix UI** para componentes accesibles
- **React Router 7** para navegación
- **Bunny.net CDN** para video hosting
- **MercadoPago** para procesamiento de pagos

## Características Principales

- **Landing page** moderna con catálogo filtrable por modalidad, tipo y categoría
- **Cursos online** con estructura modular (módulos → lecciones → videos)
- **Sistema de progreso** con indicadores visuales de avance
- **Evaluaciones** opcionales (quizzes, mock tests)
- **Comentarios** y discusión por lección
- **Panel de educador** completo con gestión de contenido
- **Sistema de comunicaciones** por email con templates personalizables
- **Pagos** con MercadoPago y transferencia bancaria
- **Diseño responsive** (mobile-friendly)

## Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## Estructura del Proyecto

```
src/
├── assets/        # Imágenes y recursos estáticos
├── components/    # Componentes reutilizables (UI)
├── lib/           # Utilidades y helpers
├── sections/      # Secciones principales de la app
├── shell/         # Layout y navegación principal
└── types/         # Definiciones de TypeScript

product/           # Documentación del producto
├── data-model/    # Modelo de datos
├── sections/      # Specs de cada sección
└── shell/         # Spec del shell
```

## Secciones

1. **Landing & Catálogo** - Página de inicio con hero y catálogo filtrable de cursos
2. **Cursos Online** - Reproductor de video, recursos, evaluaciones y comentarios
3. **Student Panel** - Dashboard personal con progreso y gestión de datos
4. **Panel de Educador** - Herramientas para crear y gestionar cursos
5. **Administración** - Gestión de usuarios, órdenes, pagos y configuración
