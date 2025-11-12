import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import useMeta from '../components/SEO'

export default function Build(){
  useMeta({
    title: 'Quenlix Build — MVP & product development studio',
    description: 'Build your product fast with Quenlix: MVPs, web apps, mobile apps, Web3 features, AI integration.'
  })
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <Hero
        title="Build your product. Fast. Smart. With Quenlix Build."
        subtitle="Product studio for MVPs, web apps, mobile apps with Web3 and AI. Discovery to launch with founder-led oversight."
        primaryCta={<a href="/contact" className="px-4 py-2 rounded-md bg-black text-white">Book a discovery call</a>}
        secondaryCta={<a href="/talent" className="px-4 py-2 rounded-md border border-black/20">See developers</a>}
      />

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-4 gap-6">
          {[
            {t:'Discovery', d:'We align on goals, users, and success metrics.'},
            {t:'Design', d:'Wireframes to UI. Rapid, iterative and user-first.'},
            {t:'Development', d:'Startup-ready engineering on modern stacks.'},
            {t:'Launch & Support', d:'Ship, measure, iterate. Scale as you grow.'},
          ].map((s,i)=> (
            <div key={i} className="p-5 rounded-xl border border-black/10">
              <div className="text-2xl font-semibold">0{i+1}</div>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="text-black/70 mt-1 text-sm">{s.d}</p>
            </div>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-14 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-black/10">
            <h2 className="text-2xl font-semibold">Services</h2>
            <ul className="mt-3 list-disc pl-5 text-black/80">
              <li>MVPs & prototypes</li>
              <li>Web applications</li>
              <li>Mobile apps</li>
              <li>Web3 features</li>
              <li>AI integration</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-black/10">
            <h2 className="text-2xl font-semibold">Benefits</h2>
            <ul className="mt-3 list-disc pl-5 text-black/80">
              <li>Faster to market</li>
              <li>Founder-friendly</li>
              <li>Full product team</li>
              <li>Scalable engagement</li>
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-14">
          <h2 className="text-3xl font-semibold">Sample case</h2>
          <div className="mt-4 p-6 rounded-xl border border-black/10">
            <p className="text-black/70">Example: Fintech MVP with React, FastAPI, and AI risk scoring. Built in 8 weeks with a squad of 1 PM, 1 designer, 2 developers. Results: closed first 5 pilot customers.</p>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
