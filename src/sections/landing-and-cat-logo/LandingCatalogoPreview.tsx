import data from '@/../product/sections/landing-and-cat-logo/data.json'
import { LandingCatalogo } from './components/LandingCatalogo'
import type { Course } from '@/../product/sections/landing-and-cat-logo/types'

/**
 * LandingCatalogoPreview - Preview wrapper for Design OS
 * Feeds sample data to the props-based component
 */
export default function LandingCatalogoPreview() {
  return (
    <LandingCatalogo
      heroContent={data.heroContent}
      educators={data.educators}
      tags={data.tags}
      upcomingCourses={data.upcomingCourses as Course[]}
      pastCourses={data.pastCourses as Course[]}
      footerLinks={data.footerLinks}
      contactInfo={data.contactInfo}
      onViewCourse={(slug) => console.log('View course:', slug)}
      onFilter={(filters) => console.log('Filter:', filters)}
      onHeroCTA={() => console.log('Hero CTA clicked')}
      onSubscribe={(email) => console.log('Subscribe:', email)}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogin={() => console.log('Login clicked')}
      onRegister={() => console.log('Register clicked')}
    />
  )
}
