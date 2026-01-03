import data from '@/../product/sections/panel-de-educador/data.json'
import { EmailCampaignList } from './components/EmailCampaignList'
import type { EmailCampaign } from '@/../product/sections/panel-de-educador/types'

export default function EmailCampaignListPreview() {
  const campaigns = data.emailCampaigns as EmailCampaign[]

  return (
    <EmailCampaignList
      campaigns={campaigns}
      onView={(id) => console.log('View campaign:', id)}
      onEdit={(id) => console.log('Edit campaign:', id)}
      onDelete={(id) => console.log('Delete campaign:', id)}
      onDuplicate={(id) => console.log('Duplicate campaign:', id)}
      onCreate={() => console.log('Create new campaign')}
    />
  )
}
