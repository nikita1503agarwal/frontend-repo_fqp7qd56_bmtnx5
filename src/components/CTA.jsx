export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Ready to build something great?</h2>
        <p className="mt-4 text-gray-600">Tell us about your project and we'll send a tailored proposal.</p>
        <form className="mt-8 grid grid-cols-1 gap-4 text-left">
          <input type="text" placeholder="Your name" className="w-full rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <input type="email" placeholder="Email" className="w-full rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <textarea placeholder="Project details" rows={4} className="w-full rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <button type="submit" className="inline-flex justify-center rounded-md bg-rose-600 px-5 py-3 text-white shadow-sm hover:bg-rose-700 transition-colors">
            Get my proposal
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500">We typically reply within 24 hours.</p>
      </div>
    </section>
  )
}
