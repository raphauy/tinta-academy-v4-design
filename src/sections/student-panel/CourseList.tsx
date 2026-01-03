import data from '@/../product/sections/student-panel/data.json'
import { CourseList } from './components/CourseList'
import type { EnrolledCourse } from '@/../product/sections/student-panel/types'

export default function CourseListPreview() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <CourseList
        courses={data.enrolledCourses as EnrolledCourse[]}
        onContinueCourse={(courseId, lessonId) =>
          console.log('Continue course:', courseId, 'Lesson:', lessonId)
        }
        onViewCourseDetails={(courseId) =>
          console.log('View course details:', courseId)
        }
        onDownloadResource={(resourceId) =>
          console.log('Download resource:', resourceId)
        }
      />
    </div>
  )
}
