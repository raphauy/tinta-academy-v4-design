import { useState } from 'react'
import { AppShell, type NavItem } from './components'
import {
  BookOpen,
  GraduationCap,
  Calendar,
  TrendingUp,
  User,
  LayoutDashboard,
  PlusCircle,
  Users,
  Mail,
  BarChart3,
  CreditCard,
  Ticket,
  Landmark,
  Settings,
} from 'lucide-react'

// Navigation configurations for each shell variant
const publicNavItems: NavItem[] = [
  { label: 'Inicio', href: '/', isActive: true },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Sobre WSET', href: '/wset' },
  { label: 'Contacto', href: '/contacto' },
]

const studentNavItems: NavItem[] = [
  { label: 'Mis Cursos', href: '/student', icon: BookOpen, isActive: true },
  { label: 'Continuar Aprendiendo', href: '/student/continue', icon: GraduationCap },
  { label: 'Calendario', href: '/student/calendar', icon: Calendar },
  { label: 'Mi Progreso', href: '/student/progress', icon: TrendingUp },
  { label: 'Mis Datos', href: '/student/profile', icon: User },
]

const educatorNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/educator', icon: LayoutDashboard, isActive: true },
  { label: 'Mis Cursos', href: '/educator/courses', icon: BookOpen },
  { label: 'Crear Curso', href: '/educator/courses/new', icon: PlusCircle },
  { label: 'Alumnos', href: '/educator/students', icon: Users },
  { label: 'Comunicaciones', href: '/educator/communications', icon: Mail },
  { label: 'Estadísticas', href: '/educator/stats', icon: BarChart3 },
]

const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, isActive: true },
  {
    label: 'Cursos',
    href: '/admin/courses',
    icon: BookOpen,
    children: [
      { label: 'Todos los Cursos', href: '/admin/courses' },
      { label: 'Crear Curso', href: '/admin/courses/new' },
    ],
  },
  {
    label: 'Usuarios',
    href: '/admin/users',
    icon: Users,
    children: [
      { label: 'Alumnos', href: '/admin/users/students' },
      { label: 'Educadores', href: '/admin/users/educators' },
      { label: 'Administradores', href: '/admin/users/admins' },
    ],
  },
  { label: 'Órdenes', href: '/admin/orders', icon: CreditCard },
  { label: 'Cupones', href: '/admin/coupons', icon: Ticket },
  { label: 'Datos Bancarios', href: '/admin/bank-data', icon: Landmark },
  {
    label: 'Comunicaciones',
    href: '/admin/communications',
    icon: Mail,
    children: [
      { label: 'Templates', href: '/admin/communications/templates' },
      { label: 'Historial', href: '/admin/communications/history' },
    ],
  },
  { label: 'Configuración', href: '/admin/settings', icon: Settings },
]

const mockUser = {
  name: 'María García',
  email: 'maria@example.com',
  role: 'student' as const,
}

type ShellVariant = 'public' | 'student' | 'educator' | 'admin'

/**
 * ShellPreview - Preview wrapper for Design OS
 * Shows all shell variants with a selector
 */
export default function ShellPreview() {
  const [variant, setVariant] = useState<ShellVariant>('student')

  const getNavItems = () => {
    switch (variant) {
      case 'public':
        return publicNavItems
      case 'student':
        return studentNavItems
      case 'educator':
        return educatorNavItems
      case 'admin':
        return adminNavItems
    }
  }

  const getUser = () => {
    if (variant === 'public') return undefined
    return {
      ...mockUser,
      role: variant as 'student' | 'educator' | 'admin',
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Variant Selector (Design OS only) - positioned at bottom center */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] bg-white rounded-full shadow-lg border border-[#DBDBDB] px-2 py-1.5 flex gap-1">
        {(['public', 'student', 'educator', 'admin'] as ShellVariant[]).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
              variant === v
                ? 'bg-[#143F3B] text-white'
                : 'text-[#2E2E2E] hover:bg-[#EBEBEB]'
            }`}
            style={{ fontFamily: 'Geist, system-ui, sans-serif' }}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Shell Preview */}
      <AppShell
        variant={variant}
        navigationItems={getNavItems()}
        user={getUser()}
        onNavigate={(href) => console.log('Navigate to:', href)}
        onLogout={() => console.log('Logout')}
      >
        {/* Sample Content */}
        <div className="p-8">
          <div className="max-w-4xl">
            <h1
              className="text-2xl font-semibold text-[#2E2E2E] mb-2"
              style={{ fontFamily: 'Geist, system-ui, sans-serif' }}
            >
              {variant === 'public' && 'Bienvenido a Tinta Academy'}
              {variant === 'student' && 'Mis Cursos'}
              {variant === 'educator' && 'Dashboard del Educador'}
              {variant === 'admin' && 'Panel de Administración'}
            </h1>
            <p
              className="text-[#7F7F7F] mb-8"
              style={{ fontFamily: 'Geist, system-ui, sans-serif' }}
            >
              {variant === 'public' && 'Formación especializada en vinos con certificación WSET.'}
              {variant === 'student' && 'Continúa donde lo dejaste o explora nuevos cursos.'}
              {variant === 'educator' && 'Gestiona tus cursos y visualiza el progreso de tus alumnos.'}
              {variant === 'admin' && 'Administra usuarios, cursos, órdenes y configuraciones.'}
            </p>

            {/* Placeholder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-[#DBDBDB] p-6 shadow-sm"
                >
                  <div className="w-full h-32 bg-[#EBEBEB] rounded-lg mb-4" />
                  <div className="h-4 bg-[#DBDBDB] rounded w-3/4 mb-2" />
                  <div className="h-3 bg-[#EBEBEB] rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AppShell>
    </div>
  )
}
