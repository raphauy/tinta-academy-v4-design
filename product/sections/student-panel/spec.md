# Panel de Alumno Specification

## Overview
Sección privada donde los alumnos inscritos (en cursos gratuitos o de pago) pueden ver y acceder a sus cursos, material de apoyo, historial de compras y gestionar su perfil. Usa el AppShell con sidebar (variante student).

## User Flows
- Ver lista de cursos inscritos (online y presenciales) en formato de lista vertical
- Acceder a cursos online: ir directo al reproductor de lecciones para continuar o repasar
- Acceder a cursos presenciales: ver página con información del evento y materiales de apoyo
- Descargar material de apoyo de cualquier curso (WSET, talleres, catas, etc.)
- Ver historial de compras/órdenes: fecha, curso, monto pagado
- Ver y editar perfil: nombre, foto, contraseña, teléfono, dirección, preferencias de notificación, datos de facturación (email es solo lectura)

## UI Requirements
- Dashboard principal muestra directamente la lista de cursos inscritos
- Cursos mostrados en lista vertical con estado/progreso
- Diferenciación visual entre cursos online y presenciales
- Usa el AppShell con variante "student" (sidebar lateral)
- Navegación en sidebar: Mis Cursos, Órdenes, Perfil

## Out of Scope
- Inscripción/compra de cursos (se hace desde el catálogo)
- Sistema de mensajería con educadores o soporte

## Configuration
- shell: true
