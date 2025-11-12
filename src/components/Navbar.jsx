import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkClass = ({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/70 hover:text-black'}`
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight">Quenlix</Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/build" className={linkClass}>Build</NavLink>
            <NavLink to="/talent" className={linkClass}>Talent</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-black text-white hover:bg-black/90">Contact</NavLink>
          </nav>
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)}><Menu/></button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/build" className={linkClass} onClick={()=>setOpen(false)}>Build</NavLink>
            <NavLink to="/talent" className={linkClass} onClick={()=>setOpen(false)}>Talent</NavLink>
            <NavLink to="/about" className={linkClass} onClick={()=>setOpen(false)}>About</NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded-md text-sm font-medium bg-black text-white" onClick={()=>setOpen(false)}>Contact</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
