import data from '@/../product/sections/student-panel/data.json'
import { Profile } from './components/Profile'

export default function ProfilePreview() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl mx-auto">
      <Profile
        student={data.student}
        onSaveProfile={(updates) => console.log('Save profile:', updates)}
        onUpdateNotifications={(prefs) => console.log('Update notifications:', prefs)}
      />
    </div>
  )
}
