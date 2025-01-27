"use client"

import Link from "next/link"
import { Github, Mail, User } from "lucide-react"

const navItems = [
  { name: "Profile", href: "https://abbassi-mouhamed.web.app", icon: User },
  { name: "Contact", href: "mailto:mouhamed.abbassi@esprit.tn?subject=Contact%20from%20Website", icon: Mail },
  { name: "About", href: "https://github.com/MouhamedAbbassi/3D_Product_Configurator", icon: Github },
] 

export default function Navbar() {
  return (
    <nav className="bg-white shadow-3d mb-5 fixed-navbar rounded-md mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
    
          </Link>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href} 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

 