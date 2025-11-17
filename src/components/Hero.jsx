import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Clean, modern websites for ambitious brands
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We design and build fast, accessible, and scalable websites that convert. From concept to launch, we handle it all.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-rose-600 px-5 py-3 text-white shadow-sm hover:bg-rose-700 transition-colors">
              Get a free proposal
            </a>
            <a href="#work" className="inline-flex items-center rounded-md border border-black/10 px-5 py-3 text-gray-900 hover:bg-gray-50">
              See our work
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" />
            </div>
            <span>Trusted by 100+ startups and SMBs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
