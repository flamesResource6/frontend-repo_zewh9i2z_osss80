import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({title, subtitle, primaryCta, secondaryCta}){
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 h-[560px]">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white pointer-events-none" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-4 text-lg md:text-xl text-black/70">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCta}
            {secondaryCta}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
