import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Rocket, Stars } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import useMeta from '../components/SEO'

export default function Home(){
  useMeta({
    title: 'Quenlix — Remote developers & product studio',
    description: 'Hire startup-ready remote developers or build your MVP with Quenlix. Web3, Web, Mobile, AI.'
  })

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <Hero
        title="Your tech partner for developers & digital products"
        subtitle="Startup-ready remote developers & mini-teams. Or build your MVP and scale with a founder-led product studio. Web3 · Web · Mobile · AI."
        primaryCta={<a href="/talent" className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90">Get Shortlist</a>}
        secondaryCta={<a href="/build" className="px-4 py-2 rounded-md border border-black/20 hover:bg-black/5">Build Your Product</a>}
      />

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 mt-10">
          <p className="text-lg text-black/70 max-w-3xl">Quenlix connects startups and agencies with pre-vetted remote developers from India and a founder-led product studio for fast, credible delivery. Choose Talent to hire developers, or Build to ship your MVP and beyond.</p>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-black/10">
            <h3 className="text-2xl font-semibold">Talent</h3>
            <p className="text-black/70 mt-2">Hire startup-ready remote developers & mini-teams for Web3 · Web · Mobile · AI.</p>
            <a href="/talent" className="mt-4 inline-block px-4 py-2 rounded-md bg-black text-white">Learn more</a>
          </div>
          <div className="p-6 rounded-xl border border-black/10">
            <h3 className="text-2xl font-semibold">Build</h3>
            <p className="text-black/70 mt-2">Build your product from idea to launch — web apps, mobile apps, MVPs.</p>
            <a href="/build" className="mt-4 inline-block px-4 py-2 rounded-md bg-black text-white">Learn more</a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16">
          <h2 className="text-3xl font-semibold">Why choose Quenlix</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {icon: Zap, title: 'Speed', desc: '48-hour shortlist. Launch fast with startup-ready talent.'},
              {icon: Stars, title: 'Quality Tech Stack', desc: 'Web3, AI, and modern web/mobile frameworks.'},
              {icon: CheckCircle, title: 'Trial Guarantee', desc: '7-day trial. Replacement guarantee.'},
              {icon: Rocket, title: 'Founder-Led', desc: 'Hands-on oversight to keep quality high.'},
            ].map((f,i)=> (
              <div key={i} className="p-5 rounded-xl border border-black/10">
                <f.icon className="w-6 h-6" />
                <h4 className="mt-3 font-semibold">{f.title}</h4>
                <p className="text-black/70 mt-1 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            {['Intake','Match/Design','Deploy/Build','Support'].map((step, i)=> (
              <div key={i} className="p-5 rounded-xl border border-black/10">
                <div className="text-2xl font-semibold">0{i+1}</div>
                <p className="mt-2 text-black/80">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
