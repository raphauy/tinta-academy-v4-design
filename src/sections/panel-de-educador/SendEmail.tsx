import data from '@/../product/sections/panel-de-educador/data.json'
import { SendEmail } from './components/SendEmail'
import type { Course, EmailTemplate } from '@/../product/sections/panel-de-educador/types'

export default function SendEmailPreview() {
  const courses = data.courses as Course[]
  const templates = data.emailTemplates as EmailTemplate[]

  return (
    <SendEmail
      courses={courses}
      templates={templates}
      onSend={(courseId, templateId, scheduledAt) => {
        console.log('Send email:', { courseId, templateId, scheduledAt })
      }}
      onCancel={() => console.log('Cancel')}
    />
  )
}
