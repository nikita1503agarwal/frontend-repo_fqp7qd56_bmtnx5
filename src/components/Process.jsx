const steps = [
  {
    title: 'Discover',
    desc: 'We align on goals, scope, and success metrics.'
  },
  {
    title: 'Design',
    desc: 'We craft intuitive flows, wireframes, and polished UI.'
  },
  {
    title: 'Build',
    desc: 'We develop fast, accessible, and scalable experiences.'
  },
  {
    title: 'Launch & Grow',
    desc: 'We deploy, measure, and iterate for impact.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Our Process</h2>
          <p className="mt-4 text-gray-600">A simple, transparent way to get great results.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-black/10 p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
