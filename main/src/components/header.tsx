import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Header() {
  return (
    <nav className="w-full bg-gray-800 p-10 py-3 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-md text-white">Follow us:</div>
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <Facebook size={24} color="#ffff" />
          </Link>
          <Link
            href="https://twitter.com"
            className="hover:text-gray-300"
            aria-label="Twitter"
          >
            <Twitter size={24} color="#ffff" />
          </Link>
          <Link
            href="https://instagram.com"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            <Instagram size={24} color="#ffff" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-white hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} color="#ffff" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
