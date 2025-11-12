export default function Footer(){
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold">Quenlix</p>
          <p className="text-black/60 mt-2">Your tech partner for developers & digital products.</p>
          <div className="mt-3 flex items-center gap-3 text-black/70">
            <a href="#" aria-label="Twitter" className="hover:text-black">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black">LinkedIn</a>
            <a href="#" aria-label="GitHub" className="hover:text-black">Blog</a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Company</p>
          <ul className="mt-2 space-y-1 text-black/70">
            <li><a href="/build" className="hover:text-black">Build</a></li>
            <li><a href="/talent" className="hover:text-black">Talent</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal & Info</p>
          <p className="text-black/70 mt-2">Quenlix Technologies Pvt. Ltd.</p>
          <p className="text-black/70">GSTIN: 00AAAAA0000A1Z5</p>
          <p className="text-black/70">Email: hello@quenlix.com</p>
          <p className="text-black/70 mt-2">© {new Date().getFullYear()} Quenlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
