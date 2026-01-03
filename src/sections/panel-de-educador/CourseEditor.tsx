import data from '@/../product/sections/panel-de-educador/data.json'
import { CourseEditor } from './components/CourseEditor'
import type { Course, Module, Lesson } from '@/../product/sections/panel-de-educador/types'

export default function CourseEditorPreview() {
  // Use the first online course for the preview
  const course = data.courses.find(c => c.modality === 'online') as Course
  const modules = data.modules.filter(m => m.courseId === course.id) as Module[]
  const lessons = data.lessons as Lesson[]

  return (
    <CourseEditor
      course={course}
      modules={modules}
      lessons={lessons}
      onSave={(data) => console.log('Save course:', data)}
      onCancel={() => console.log('Cancel')}
      onPublish={() => console.log('Publish course')}
      onCreateModule={() => console.log('Create module')}
      onEditModule={(id) => console.log('Edit module:', id)}
      onDeleteModule={(id) => console.log('Delete module:', id)}
      onReorderModules={(ids) => console.log('Reorder modules:', ids)}
      onCreateLesson={(moduleId) => console.log('Create lesson in module:', moduleId)}
      onEditLesson={(id) => console.log('Edit lesson:', id)}
      onDeleteLesson={(id) => console.log('Delete lesson:', id)}
      onReorderLessons={(moduleId, ids) => console.log('Reorder lessons:', moduleId, ids)}
    />
  )
}
