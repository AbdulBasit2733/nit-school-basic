'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white sm:px-5 px-3">
      <div className="container-width">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
              <div className=" py-2 px-1 bg-white rounded-full flex items-center justify-center">
              {/*<BookOpen className="text-white" size={20} />*/}
              <Image src={'/new-logo.png'} alt='logo' width={40} height={40}/>
            </div>
                <div>
                  <h3 className="text-xl font-bold">N.I.T</h3>
                  <p className="text-sm text-gray-400">New Iqra Techno</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                CBSE affiliated school providing quality education from Junior KG to 12th Standard, 
                nurturing students in both Deen and Duniya.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Academics', href: '/academics' },
                  { name: 'Admissions', href: '/contact' },
                  { name: 'Gallery', href: '/gallery' },
                  { name: 'Events', href: '/events' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                {[
                  'Junior KG - Senior KG',
                  'Primary (1st - 5th)',
                  'Middle School (6th - 8th)',
                  'Secondary (9th - 10th)',
                  'Senior Secondary (11th - 12th)',
                  'Islamic Studies'
                ].map((program) => (
                  <li key={program}>
                    <span className="text-gray-400">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-500 mt-1" size={16} />
                  <div className="text-gray-400 text-sm">
                    <p>New Iqra Techno School</p>
                    <p>123 Education Street</p>
                    <p>Knowledge City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-500" size={16} />
                  <span className="text-gray-400 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-500" size={16} />
                  <span className="text-gray-400 text-sm">info@newiqratechno.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} New Iqra Techno (N.I.T). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                CBSE Affiliation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}