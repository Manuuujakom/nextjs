'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Home, 
  Paintbrush, 
  BarChart2, 
  DollarSign, 
  Headset, 
  School, 
  Info, 
  Menu, 
  X 
} from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0A1128] py-4 shadow-xl">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-[#C9B072] text-4xl font-extrabold tracking-tight">
          <Image 
            src="https://i.imgur.com/zWVSml6.png" 
            alt="JAKOM Logo" 
            width={192}
            height={48}
            className="h-12 w-auto object-contain" 
          />
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Home className="mr-2" size={20} />Home
          </Link>
          <Link href="/graphics-design" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Paintbrush className="mr-2" size={20} />Graphics & Design
          </Link>
          <Link href="/data-analysis" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <BarChart2 className="mr-2" size={20} />Data Analysis
          </Link>
          <Link href="/accounting-bookkeeping" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
          </Link>
          <Link href="/virtual-assistance" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Headset className="mr-2" size={20} />Virtual Assistance
          </Link>
          <Link href="/kids-hub" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <School className="mr-2" size={20} />Kids Hub
          </Link>
          <Link href="/about-us" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Info className="mr-2" size={20} />About Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#F8F8F8] focus:outline-none">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#0A1128] py-4`}>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <Home className="mr-2" size={20} />Home
          </Link>
          <Link href="/graphics-design" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <Paintbrush className="mr-2" size={20} />Graphics & Design
          </Link>
          <Link href="/data-analysis" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <BarChart2 className="mr-2" size={20} />Data Analysis
          </Link>
          <Link href="/accounting-bookkeeping" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
          </Link>
          <Link href="/virtual-assistance" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <Headset className="mr-2" size={20} />Virtual Assistance
          </Link>
          <Link href="/kids-hub" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <School className="mr-2" size={20} />Kids Hub
          </Link>
          <Link href="/about-us" className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center" onClick={toggleMobileMenu}>
            <Info className="mr-2" size={20} />About Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header