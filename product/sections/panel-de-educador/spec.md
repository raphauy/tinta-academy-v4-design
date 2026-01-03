# Panel de Educador Specification

## Overview
Panel privado donde los educadores gestionan sus cursos (online y presenciales), crean contenido con módulos/lecciones/videos, ven estadísticas de alumnos y envían comunicaciones por email. Usa el AppShell con variante educador.

## User Flows
- Dashboard inicial muestra métricas: total alumnos, cursos activos, progreso promedio de alumnos, gráficos de evolución (sin ingresos)
- Ver lista de cursos propios con filtros por tipo (online/presencial) y estado (borrador/publicado/finalizado)
- Crear nuevo curso: seleccionar tipo → completar info básica → agregar contenido → configurar precio → publicar
- Editar curso con tabs: Info básica, Contenido (módulos/lecciones), Precios, Configuración
- Gestionar contenido de curso online: crear módulos, agregar lecciones con video (Bunny.net), recursos descargables, evaluaciones opcionales
- Reordenar módulos y lecciones con drag & drop
- Ver alumnos inscritos en cada curso con su progreso individual
- Crear y gestionar templates de email con variables dinámicas ({{nombre}}, {{curso}}, etc.)
- Enviar comunicaciones masivas a alumnos de un curso: seleccionar template, editar, programar envío, vista previa
- Ver historial de comunicaciones enviadas

## UI Requirements
- Dashboard con cards de métricas y gráficos de evolución temporal
- Lista de cursos en cards o tabla con acciones rápidas
- Editor de curso con tabs: Info básica, Contenido, Precios, Configuración
- Gestión de módulos/lecciones con drag & drop para reordenar
- Integración con Bunny.net para upload/gestión de videos
- Tabla de alumnos inscritos con barra de progreso
- Editor de templates de email con preview de variables
- Formulario de envío de comunicación con selector de curso, template y programación

## Out of Scope
- Gestión de pagos/órdenes (responsabilidad del admin)
- Crear o gestionar otros educadores
- Ver ingresos o datos financieros

## Configuration
- shell: true
