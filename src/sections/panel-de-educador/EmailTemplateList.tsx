import data from '@/../product/sections/panel-de-educador/data.json'
import { EmailTemplateList } from './components/EmailTemplateList'
import type { EmailTemplate } from '@/../product/sections/panel-de-educador/types'

export default function EmailTemplateListPreview() {
  const templates = data.emailTemplates as EmailTemplate[]

  return (
    <EmailTemplateList
      templates={templates}
      onEdit={(id) => console.log('Edit template:', id)}
      onDelete={(id) => console.log('Delete template:', id)}
      onDuplicate={(id) => console.log('Duplicate template:', id)}
      onCreate={() => console.log('Create new template')}
      onUseTemplate={(id) => console.log('Use template in campaign:', id)}
    />
  )
}
