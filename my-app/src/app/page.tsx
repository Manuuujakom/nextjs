"use client"; // REQUIRED because of useState, useEffect, useRef, useCallback

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { useRouter } from 'next/navigation'; // Import useRouter for programmatic navigation

// Lucide React Icons - keep all imports as they were, even if not used in THIS specific component
import {
  BarChart2, DollarSign, Headset, Paintbrush, Code, Info, Users, School, Home,
  Mail, Phone, MessageSquare, Smartphone, MapPin, Send, CheckCircle, XCircle,
  Linkedin, Facebook, Instagram, Menu, X
} from 'lucide-react';

// Placeholder for trackEvent - You should ideally import this from '@/lib/analytics'
// Once your analytics setup is complete, replace this with the actual import.
const trackEvent = (eventName: string, eventCategory: string, eventLabel: string) => {
  console.log(`Tracking Event: ${eventName}, Category: ${eventCategory}, Label: ${eventLabel}`);
  // Implement actual analytics tracking here (e.g., gtag, Segment, etc.)
  // If you are using Google Analytics, it might look like:
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, {
  //     event_category: eventCategory,
  //     event_label: eventLabel,
  //     // Add other event parameters if needed
  //   });
  // }
};

// --- ServiceCard Component ---
// This component should ideally be moved to its own file (e.g., src/components/ServiceCard.tsx)
// but for this example, we'll keep it here for context.
interface ServiceCardProps {
  icon: React.ElementType; // Type for Lucide icon components
  title: string;
  description: string;
  delay: number;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay, path }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null); // Specify type for useRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    trackEvent('service_card_click', 'navigation', title);
  };

  return (
    // Use Next.js Link component for proper client-side navigation
    <Link
      href={path}
      className="block"
      onClick={handleClick} // Analytics tracking on Link click
    >
      <div
        ref={cardRef}
        className={`
          bg-[#0A1128] border border-[#C9B072] rounded-xl p-8 flex flex-col items-center text-center shadow-lg
          transition-all duration-700 ease-out transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          hover:scale-105 hover:shadow-2xl service-card
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="p-4 bg-[#C9B072] text-[#0A1128] rounded-full mb-4 inline-flex items-center justify-center">
          <Icon size={48} />
        </div>
        <h3 className="text-2xl font-bold text-[#F8F8F8] mb-3">{title}</h3>
        <p className="text-[#CCD2E3] text-lg leading-relaxed">{description}</p>
        <div className="mt-6 px-6 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-md">
          Learn More
        </div>
      </div>
    </Link>
  );
};

// --- Header Component ---
// This component should ideally be moved to its own file (e.g., src/components/Header.tsx)
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Use useRouter for programmatic navigation

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (path: string) => {
    router.push(path); // Use router.push for navigation
    if (mobileMenuOpen) {
      toggleMobileMenu(); // Close mobile menu after navigation
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A1128] py-4 shadow-xl">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Use Next.js Link component */}
        <Link href="/" className="text-[#C9B072] text-4xl font-extrabold tracking-tight">
          <img src="https://i.imgur.com/zWVSml6.png" alt="JAKOM Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/" onClick={() => handleNavLinkClick('/')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Home className="mr-2" size={20} />Home
          </Link>
          <Link href="/graphics-design" onClick={() => handleNavLinkClick('/graphics-design')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Paintbrush className="mr-2" size={20} />Graphics & Design
          </Link>
          <Link href="/data-analysis" onClick={() => handleNavLinkClick('/data-analysis')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <BarChart2 className="mr-2" size={20} />Data Analysis
          </Link>
          <Link href="/accounting-bookkeeping" onClick={() => handleNavLinkClick('/accounting-bookkeeping')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
          </Link>
          <Link href="/virtual-assistance" onClick={() => handleNavLinkClick('/virtual-assistance')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Headset className="mr-2" size={20} />Virtual Assistance
          </Link>
          <Link href="/kids-hub" onClick={() => handleNavLinkClick('/kids-hub')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <School className="mr-2" size={20} />Kids Hub
          </Link>
          <Link href="/about-us" onClick={() => handleNavLinkClick('/about-us')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
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
          <Link href="/" onClick={() => handleNavLinkClick('/')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Home className="mr-2" size={20} />Home
          </Link>
          <Link href="/graphics-design" onClick={() => handleNavLinkClick('/graphics-design')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Paintbrush className="mr-2" size={20} />Graphics & Design
          </Link>
          <Link href="/data-analysis" onClick={() => handleNavLinkClick('/data-analysis')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <BarChart2 className="mr-2" size={20} />Data Analysis
          </Link>
          <Link href="/accounting-bookkeeping" onClick={() => handleNavLinkClick('/accounting-bookkeeping')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <DollarSign className="mr-2" size={20} />Accounting & Bookkeeping
          </Link>
          <Link href="/virtual-assistance" onClick={() => handleNavLinkClick('/virtual-assistance')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Headset className="mr-2" size={20} />Virtual Assistance
          </Link>
          <Link href="/kids-hub" onClick={() => handleNavLinkClick('/kids-hub')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <School className="mr-2" size={20} />Kids Hub
          </Link>
          <Link href="/about-us" onClick={() => handleNavLinkClick('/about-us')} className="text-[#F8F8F8] hover:text-[#C9B072] transition duration-300 text-lg flex items-center">
            <Info className="mr-2" size={20} />About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

// --- Footer Component ---
// This component should ideally be moved to its own file (e.g., src/components/Footer.tsx)
const Footer: React.FC = () => {
  const router = useRouter(); // Use useRouter for programmatic navigation

  const handleNavLinkClick = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="bg-[#0A1128] border-t border-[#C9B072] py-12 text-[#CCD2E3]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="col-span-1">
          {/* Use Next.js Link component */}
          <Link href="/" className="inline-block mb-4">
            <img src="https://i.imgur.com/zWVSml6.png" alt="JAKOM Logo" className="h-10 w-auto object-contain mx-auto md:mx-0" />
          </Link>
          <p className="text-sm leading-relaxed mt-2">
            Empowering your business with seamless integration and expert support.
          </p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} JAKOM. All rights reserved.</p>
          <p className="mt-2 text-xs">Built by Obare Emmanuel</p>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about-us" className="hover:text-[#C9B072] transition duration-300">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#C9B072] transition duration-300">Contact Us</Link></li>
            <li><Link href="/graphics-design" className="hover:text-[#C9B072] transition duration-300">Our Services</Link></li>
            <li><Link href="/kids-hub" className="hover:text-[#C9B072] transition duration-300">Kids Hub</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Legal & Resources</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-[#C9B072] transition duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[#C9B072] transition duration-300">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-[#C9B072] transition duration-300">FAQ</Link></li>
            <li><Link href="#" className="hover:text-[#C9B072] transition duration-300">Support</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Get In Touch</h3>
          <div className="space-y-3 mb-6">
            <p className="flex items-center justify-center md:justify-start">
              <MapPin size={20} className="mr-3 text-[#C9B072]" />
              <span>Nairobi, Kenya</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail size={20} className="mr-3 text-[#C9B072]" />
              <a href="mailto:emmanuelomondiobare@gmail.com" className="hover:text-[#C9B072] transition duration-300">emmanuelomondiobare@gmail.com</a>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="mr-3 text-[#C9B072]" />
              <a href="tel:+254794255000" className="hover:text-[#C9B072] transition duration-300">+254 794 255 000</a>
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#C9B072] hover:text-[#F8F8F8] transition duration-300" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main HomePage component ---
// Remove the 'navigate' prop as it's not needed anymore with next/router.
export default function HomePage() {
  const observedSections = useRef<Set<HTMLElement>>(new Set());
  const router = useRouter(); // Initialize useRouter for direct navigation

  // Update setSectionRef to correctly type the node
  const setSectionRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      observedSections.current.add(node);
    }
  }, []);

  const handleAppSectionIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up-active');
        // You might need to refine how you store/access the observer if it's not directly on the element
        // For simplicity, let's just unobserve it if it was observed
        if ((entry.target as any).currentObserver) {
          ((entry.target as any).currentObserver as IntersectionObserver).unobserve(entry.target);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleAppSectionIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Observe sections already added
    observedSections.current.forEach(section => {
      if (section) {
        observer.observe(section);
        (section as any).currentObserver = observer; // Store observer on the element for unobserving
      }
    });

    // Cleanup function
    return () => {
      observedSections.current.forEach(section => {
        if (section && (section as any).currentObserver) {
          ((section as any).currentObserver as IntersectionObserver).unobserve(section);
        }
      });
      observer.disconnect();
      observedSections.current.clear();
    };
  }, [handleAppSectionIntersect]);

  // Ref for the hero section to apply background particles
  const heroSectionRef = useRef<HTMLDivElement>(null); // Specify type for useRef

  // Effect to add the bg-particles class for the animated background
  useEffect(() => {
    if (heroSectionRef.current) {
      heroSectionRef.current.classList.add('bg-particles');
    }
  }, []);

  // Helper function for programmatic navigation that also tracks event
  const navigateAndTrack = (path: string, eventName: string, eventCategory: string, eventLabel: string) => {
    trackEvent(eventName, eventCategory, eventLabel);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F8F8] font-sans overflow-x-hidden">
      {/* Header and Footer no longer receive 'navigate' prop */}
      <Header />
      <section ref={heroSectionRef} className="relative hero-section px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(201,176,114,0.05)] to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1128] leading-tight mt-8 mb-4 hero-text-animate">
            JAKOM: Your <span className="shimmer-text text-[#C9B072]">One-Stop</span> Tech Solution
          </h1>
          <p className="text-xl md:text-2xl text-[#333333] mb-8 hero-text-animate" style={{ animationDelay: '2.5s' }}>
            Empowering Your Business with Seamless Integration and Expert Support.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-center mt-8 md:mt-0">
          <div className="jo-logo-container">
            <img
              src="https://i.imgur.com/GnYpS80.png"
              alt="JAKOM Logo"
              className="jo-logo"
              onError={(e) => {
                const target = e.target as HTMLImageElement; // Type assertion for TypeScript
                target.onerror = null;
                target.src = 'https://placehold.co/700x420/E0E0E0/C9B072?text=Logo+Missing';
              }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100 text-center">
        <div className="flex justify-center">
          {/* Use Next.js Link and navigateAndTrack helper */}
          <Link
            href="/contact-us"
            className="px-10 py-4 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 hero-text-animate"
            style={{ animationDelay: '3s' }}
            onClick={() => navigateAndTrack('/contact-us', 'cta_click', 'engagement', 'get_started_today')}
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="py-20 bg-[#0A1128] container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-[#F8F8F8] mb-16 fade-in-up" ref={setSectionRef}>
          Our Integrated Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ServiceCard icon={Paintbrush} title="Graphics & Design" description="Stunning visuals that capture attention and communicate your brand's unique story effectively." delay={0} path="/graphics-design" />
          <ServiceCard icon={BarChart2} title="Data Analysis" description="Unlock actionable insights from your data to drive informed decisions and strategic growth." delay={100} path="/data-analysis" />
          <ServiceCard icon={DollarSign} title="Accounting & Bookkeeping" description="Expert financial management to ensure accuracy, compliance, and peace of mind." delay={200} path="/accounting-bookkeeping" />
          <ServiceCard icon={Headset} title="Virtual Assistance" description="Efficient administrative support, freeing your time to focus on core business activities." delay={300} path="/virtual-assistance" />
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-[#C9B072] container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center fade-in-up" ref={setSectionRef}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Kids Hub"
              className="rounded-xl shadow-2xl object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement; // Type assertion for TypeScript
                target.onerror = null;
                target.src = 'https://placehold.co/500x350/0A1128/4CAF50?text=Kids+Hub+Fun';
              }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left fade-in-up" ref={setSectionRef}>
            <h2 className="text-5xl font-extrabold text-[#0A1128] mb-6">
              Empowering the Next Generation: <span className="text-[#4CAF50]">Kids Hub</span>
            </h2>
            <p className="text-xl text-[#333333] leading-relaxed mb-8">
              At JAKOM, we believe in nurturing talent from a young age. Our Kids Hub offers engaging and interactive programs designed to introduce children to the exciting world of technology, creativity, and problem-solving. Spark curiosity and build foundational skills for a brighter future!
            </p>
            {/* Use Next.js Link */}
            <Link
              href="/kids-hub"
              className="px-8 py-3 bg-[#C9B072] text-[#0A1128] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center"
            >
              Explore Kids Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1128] border-t border-[#C9B072] container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-[#F8F8F8] mb-6 fade-in-up" ref={setSectionRef}>
            About JAKOM
          </h2>
          <p className="text-xl text-[#CCD2E3] leading-relaxed mb-8 fade-in-up" ref={setSectionRef}>
            JAKOM is more than just a service provider; we are your dedicated partner in navigating the complexities of modern business. Our mission is to simplify operations, enhance efficiency, and foster growth for enterprises of all sizes through innovative tech solutions and unparalleled expertise. We pride ourselves on delivering integrated services that truly make a difference.
          </p>
          {/* Use Next.js Link */}
          <Link
            href="/about-us"
            className="px-8 py-3 bg-[#4CAF50] text-[#F8F8F8] font-semibold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-90 inline-flex items-center justify-center"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100 border-t border-[#C9B072] text-center px-6">
        <h2 className="text-5xl font-extrabold text-[#0A1128] mb-6 fade-in-up" ref={setSectionRef}>
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl text-[#333333] mb-10 fade-in-up" ref={setSectionRef}>
          Let's discuss how JAKOM's comprehensive solutions can empower your success.
        </p>
        {/* Use Next.js Link and navigateAndTrack helper */}
        <Link
          href="/contact-us"
          className="px-12 py-4 bg-[#C9B072] text-[#0A1128] font-bold text-xl rounded-full shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-opacity-90 animate-pulse fade-in-up inline-flex items-center justify-center"
          ref={setSectionRef}
          onClick={() => navigateAndTrack('/contact-us', 'cta_click', 'engagement', 'contact_us_now')}
        >
          Contact Us Now
        </Link>
      </section>

      <Footer /> {/* No 'navigate' prop needed */}
    </div>
  );
}