import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import useMeta from '../components/SEO'

export default function Talent(){
  useMeta({
    title: 'Quenlix Talent — Remote Web3, AI, Web & Mobile developers',
    description: 'Hire startup-ready remote developers & mini-teams. 48-hour shortlist, 7-day trial, replacement guarantee.'
  })

  const [devs, setDevs] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  useEffect(()=>{
    fetch(baseUrl + '/developers').then(r=>r.json()).then(setDevs).catch(()=>{})
  },[])

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <Hero
        title="Hire remote developers & mini-teams. Web3 · Web · Mobile · AI."
        subtitle="Pre-vetted developers from India. 48-hour shortlist. 7-day trial. Replacement guarantee."
        primaryCta={<a href="/contact" className="px-4 py-2 rounded-md bg-black text-white">Get your shortlist</a>}
        secondaryCta={<a href="/build" className="px-4 py-2 rounded-md border border-black/20">Need a product team?</a>}
      />

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-black/10">
            <h3 className="font-semibold">Value</h3>
            <ul className="mt-2 space-y-2 text-black/70 text-sm">
              <li>Pre-vetted talent</li>
              <li>48-hour shortlist</li>
              <li>7-day trial</li>
              <li>Replacement guarantee</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-black/10">
            <h3 className="font-semibold">Process</h3>
            <ul className="mt-2 space-y-2 text-black/70 text-sm">
              <li>Intake</li>
              <li>Shortlist</li>
              <li>Onboard</li>
              <li>Manage</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-black/10">
            <h3 className="font-semibold">Pricing snapshot</h3>
            <p className="text-black/70 text-sm">Monthly retainers: Junior $900-1200/mo, Mid $1500-2200/mo, Senior $2500+/mo</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-14">
          <h2 className="text-3xl font-semibold">Developers</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {devs.slice(0,6).map((d,i)=> (
              <div key={i} className="p-5 rounded-xl border border-black/10">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{d.name}</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-black/5">{d.availability}</span>
                </div>
                <p className="mt-1 text-sm text-black/70">{d.stack?.join(', ')}</p>
                <p className="mt-2 text-sm">Experience: {d.experience_years} yrs</p>
                <p className="text-sm">Rate: ${d.rate_per_month}/mo</p>
                <p className="text-xs text-black/60 mt-1">{d.tags?.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
