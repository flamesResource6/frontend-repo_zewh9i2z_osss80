import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useMeta from '../components/SEO'

export default function Contact(){
  useMeta({
    title: 'Contact Quenlix — Hire developers or build your MVP',
    description: 'Get in touch to hire remote developers, Web3/AI specialists, or build your product with Quenlix.'
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    setLoading(true)
    try {
      const res = await fetch(baseUrl + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          needs: data.needs,
          page: 'contact'
        })
      })
      const json = await res.json()
      if(res.ok) setStatus('Thanks! We will reach out shortly.')
      else setStatus(json?.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <section className="pt-28 max-w-xl mx-auto px-4">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-black/70">Email: hello@quenlix.com · Follow us on LinkedIn & Twitter</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input name="name" required className="mt-1 w-full border border-black/10 rounded-md px-3 py-2"/>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" name="email" required className="mt-1 w-full border border-black/10 rounded-md px-3 py-2"/>
          </div>
          <div>
            <label className="text-sm">Company</label>
            <input name="company" className="mt-1 w-full border border-black/10 rounded-md px-3 py-2"/>
          </div>
          <div>
            <label className="text-sm">Needs</label>
            <textarea name="needs" rows="4" className="mt-1 w-full border border-black/10 rounded-md px-3 py-2" placeholder="Remote developers, MVP, Web3, AI, etc"/>
          </div>
          <button disabled={loading} className="px-4 py-2 rounded-md bg-black text-white">{loading ? 'Sending...' : 'Send'}</button>
          {status && <p className="text-sm text-black/70">{status}</p>}
        </form>
      </section>
      <Footer/>
    </div>
  )
}
