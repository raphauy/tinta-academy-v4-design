import data from '@/../product/sections/panel-de-educador/data.json'
import { CourseList } from './components/CourseList'
import type { Course } from '@/../product/sections/panel-de-educador/types'

export default function CourseListPreview() {
  return (
    <CourseList
      courses={data.courses as Course[]}
      onView={(id) => console.log('View course:', id)}
      onEdit={(id) => console.log('Edit course:', id)}
      onDelete={(id) => console.log('Delete course:', id)}
      onPublish={(id) => console.log('Publish course:', id)}
      onDuplicate={(id) => console.log('Duplicate course:', id)}
      onCreate={() => console.log('Create new course')}
    />
  )
}
