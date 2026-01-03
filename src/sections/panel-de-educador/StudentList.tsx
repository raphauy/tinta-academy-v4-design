import data from '@/../product/sections/panel-de-educador/data.json'
import { StudentList } from './components/StudentList'
import type { Course, EnrolledStudent } from '@/../product/sections/panel-de-educador/types'

export default function StudentListPreview() {
  // Use the first course and its enrolled students
  const course = data.courses[0] as Course
  const students = data.enrolledStudents.filter(
    (s) => s.courseId === course.id
  ) as EnrolledStudent[]

  return (
    <StudentList
      course={course}
      students={students}
      onViewStudent={(id) => console.log('View student:', id)}
      onEmailStudent={(id) => console.log('Email student:', id)}
      onExport={() => console.log('Export student list')}
    />
  )
}
