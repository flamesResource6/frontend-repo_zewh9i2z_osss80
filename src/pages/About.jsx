import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useMeta from '../components/SEO'

export default function About(){
  useMeta({
    title: 'About Quenlix — Tech partner for developers & products',
    description: 'Quenlix is a founder-led studio offering remote developers and MVP/product development for startups and agencies.'
  })
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <section className="pt-28 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-semibold tracking-tight">About Quenlix</h1>
        <p className="mt-4 text-black/70">Founded by a tech founder who saw how hard hiring quality devs is. We combine staffing (remote developers) and a product studio (MVP to scale) so you can move faster with confidence.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-black/10">
            <h2 className="text-2xl font-semibold">Mission & Vision</h2>
            <p className="text-black/70 mt-2">Mission: make hiring startup-ready engineers and building MVPs simple, transparent, and fast. Vision: a trusted partner for startups worldwide.</p>
          </div>
          <div className="p-6 rounded-xl border border-black/10">
            <h2 className="text-2xl font-semibold">Values</h2>
            <ul className="mt-2 list-disc pl-5 text-black/80">
              <li>Transparency</li>
              <li>Speed</li>
              <li>Quality</li>
              <li>Emerging Tech Focus (Web3, AI)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-xl border border-black/10">
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="text-black/70 mt-2">Founder: Senior engineer turned founder with experience shipping SaaS, Web3, and AI products. Hands-on in process, reviews, and delivery.</p>
          <a href="/contact" className="mt-4 inline-block px-4 py-2 rounded-md bg-black text-white">Let's talk</a>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
