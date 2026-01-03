# Data Model

## Entities

### User
Persona registrada en la plataforma con autenticación via Clerk. Contiene email, nombre, apellido e imagen de perfil. Puede tener rol de alumno, educador o admin.

### Student
Datos extendidos del alumno incluyendo fecha de nacimiento, teléfono, dirección, ciudad, código postal y país. Cada Student pertenece a un User.

### Educator
Instructor que crea y gestiona cursos. Tiene nombre, título profesional, biografía e imagen de perfil.

### Course
Curso que puede ser presencial u online. Incluye tipo (WSET niveles, taller, cata, curso), estado (anunciado, inscribiendo, finalizado), título, slug, duración, precios en USD y UYU, capacidad máxima, ubicación, fechas de clases, imagen y descripción. Para cursos online, contiene módulos con lecciones.

### Module
Agrupación temática de lecciones dentro de un curso online. Tiene título, descripción y orden de visualización.

### Lesson
Lección individual dentro de un módulo. Contiene título, video (URL de Bunny.net), duración del video y orden de visualización.

### Resource
Archivo descargable asociado a una lección. Puede ser PDF, documento o enlace externo.

### Evaluation
Quiz o prueba que puede asociarse a un módulo específico o al curso completo. Incluye preguntas y respuestas para evaluación del alumno.

### Enrollment
Inscripción de un alumno a un curso. Registra la fecha de inscripción y el estado de acceso.

### Progress
Seguimiento del avance del alumno en cada lección. Indica si la lección fue completada y el timestamp de completado.

### Comment
Comentario de un alumno en una lección específica. Incluye contenido, fecha y autor.

### Order
Orden de pago para inscripción a un curso. Contiene número, estado (Created, Pending, PaymentSent, Paid, Rejected, Refunded, Cancelled), método de pago (MercadoPago, Transferencia, Gratuito), monto, moneda y comentarios de transferencia bancaria.

### Coupon
Cupón de descuento con código único, porcentaje de descuento, máximo de usos, usos actuales, email restringido opcional y fecha de expiración. Puede estar asociado a un curso específico.

### BankData
Información de cuenta bancaria para mostrar al alumno cuando elige pago por transferencia. Incluye nombre del banco e información de la cuenta.

### CourseObserver
Registro de un usuario interesado en un curso para recibir notificaciones cuando el curso esté disponible.

### EmailTemplate
Plantilla reutilizable para comunicaciones por email. Soporta variables dinámicas como nombre del alumno y nombre del curso.

### EmailCampaign
Envío programado de comunicación a los alumnos inscriptos en un curso. Incluye template utilizado, curso destino, fecha/hora de envío y estado.

## Relationships

- User has many Student (un usuario puede tener múltiples perfiles de estudiante)
- User has many CourseObserver
- Student belongs to User
- Student has many Order
- Student has many Enrollment
- Student has many Progress
- Student has many Comment
- Educator has many Course
- Course belongs to Educator
- Course has many Module (solo cursos online)
- Course has many Order
- Course has many Coupon
- Course has many CourseObserver
- Course has many Enrollment
- Course has many EmailCampaign
- Module belongs to Course
- Module has many Lesson
- Module has many Evaluation (opcional)
- Lesson belongs to Module
- Lesson has many Resource
- Lesson has many Comment
- Lesson has many Progress
- Resource belongs to Lesson
- Evaluation belongs to Module or Course
- Enrollment belongs to Student and Course
- Progress belongs to Student and Lesson
- Comment belongs to Student and Lesson
- Order belongs to Student and Course
- Order optionally belongs to Coupon
- Order optionally belongs to BankData
- Coupon optionally belongs to Course
- CourseObserver belongs to User and Course
- EmailTemplate has many EmailCampaign
- EmailCampaign belongs to Course and EmailTemplate
