import { Code, Palette, LineChart, Gauge } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Robust, scalable websites and web apps built with modern stacks and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Human-centered design that is clean, accessible, and on-brand.'
  },
  {
    icon: Gauge,
    title: 'Performance & SEO',
    desc: 'Lightning-fast experiences optimized for Core Web Vitals and search visibility.'
  },
  {
    icon: LineChart,
    title: 'Analytics & Growth',
    desc: 'Measure what matters and iterate with data-driven insights.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Services</h2>
          <p className="mt-4 text-gray-600">Everything you need to go from idea to impact.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
