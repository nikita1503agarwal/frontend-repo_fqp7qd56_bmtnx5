const projects = [
  {
    name: 'Nova SaaS',
    tag: 'B2B SaaS',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Peak Fitness',
    tag: 'DTC Ecommerce',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Volt Energy',
    tag: 'Clean Tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-4 text-gray-600">A few projects we recently shipped.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-black/10 bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-rose-600">{p.tag}</div>
                <div className="mt-1 font-semibold">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
