# Landing & Catálogo Specification

## Overview
Página de entrada principal de Tinta Academy con un hero cinematográfico con video de fondo, filtros rápidos integrados y un catálogo completo de cursos. Diseño minimalista y premium que refleja la sofisticación del mundo del vino.

## User Flows
- Usuario llega → ve hero con video atmosférico y propuesta de valor → usa chips de filtro rápido para seleccionar modalidad/tipo → hace scroll al catálogo filtrado
- Usuario explora catálogo → ve próximos cursos primero, finalizados después → aplica filtros adicionales (modalidad, tags, tipo) → hace clic en curso → va a página de detalle
- Usuario quiere registrarse → hace clic en "Iniciar Sesión" o "Registrarse" en header → va a auth flow
- Usuario busca información → hace scroll al footer → encuentra contacto, redes, info WSET, links legales, newsletter

## UI Requirements
- Hero: Video de fondo (catas, viñedos, clases), overlay con gradiente, headline potente, subheadline con propuesta de valor, chips de filtro rápido (Online/Presencial, Curso/Taller/Cata)
- Catálogo: Grid responsivo (1-2-3 columnas), dos secciones: "Próximos Cursos" y "Cursos Finalizados"
- Filtros: Barra colapsable/desplegable con: Modalidad (Online/Presencial), Tags (múltiples), Tipo (Curso WSET/Taller/Cata/Evento)
- Cards de curso: Imagen, título, fecha inicio, duración, capacidad máx, precio (USD), ubicación/modalidad, descripción corta, foto y nombre del educador, badge de tipo, CTA "Ver detalles"
- Footer: Columnas con: Logo + descripción, Links (Cursos, Sobre WSET, Contacto, Legales), Redes sociales, Newsletter signup

## Configuration
- shell: false
