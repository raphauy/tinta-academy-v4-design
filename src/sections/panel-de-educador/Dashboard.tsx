import data from '@/../product/sections/panel-de-educador/data.json'
import { EducatorDashboard } from './components/EducatorDashboard'
import type { Educator, DashboardMetrics, Course } from '@/../product/sections/panel-de-educador/types'

export default function DashboardPreview() {
  return (
    <EducatorDashboard
      educator={data.educator as Educator}
      metrics={data.dashboardMetrics as DashboardMetrics}
      courses={data.courses as Course[]}
      onViewCourse={(id) => console.log('View course:', id)}
      onCreateCourse={() => console.log('Create new course')}
    />
  )
}
