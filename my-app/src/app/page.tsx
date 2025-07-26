// app/page.tsx

// You might not need 'use client' if this page only renders static content
// and doesn't use client-side hooks or event listeners.
// However, if your HomePage component has interactivity (e.g., button clicks,
// state management not related to data fetching from server), you will need it.
// If your existing HomePage was interactive, keep it.
// For now, let's assume it *might* need client-side features.
"use client";

// Import any components or utilities HomePage uses from your 'src' directory
// Adjust the paths based on your actual project structure.
// Assuming 'src' is a sibling to 'app' or you've configured path aliases.
// If 'src' is at the root level alongside 'app', then paths might be like '@/components/...'
// or '../../src/components/...' depending on your tsconfig.json paths.

// Example: If 'src' is a sibling to 'app' and you have a base URL alias like '@/'
// import SomeComponent from '@/components/SomeComponent';
// import { useSomeHook } from '@/hooks/use-some-hook';

// Assuming your HomePage had actual content and structure,
// replace this placeholder with your original HomePage content.
// For demonstration, let's create a simple HomePage.

import React from 'react';
import Link from 'next/link'; // Use next/link for navigation

// If your original HomePage imported other custom components, import them here
// e.g., import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-8 text-blue-700">Welcome to My Service Hub</h1>

      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Discover professional services tailored to your needs, from creative design to meticulous data analysis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Graphics Design"
          description="Stunning visuals for your brand."
          href="/graphics-design"
        />
        <ServiceCard
          title="Data Analysis"
          description="Insights from your complex data."
          href="/data-analysis"
        />
        <ServiceCard
          title="Accounting & Bookkeeping"
          description="Expert financial management."
          href="/accounting-bookkeeping"
        />
        <ServiceCard
          title="Virtual Assistance"
          description="Efficient support for your tasks."
          href="/virtual-assistance"
        />
        <ServiceCard
          title="Kids Hub"
          description="Engaging and educational content for children."
          href="/kids-hub"
        />
      </div>

      <div className="mt-12 text-center">
        <Link href="/about-us" className="text-blue-600 hover:underline mx-4">
          Learn About Us
        </Link>
        <Link href="/contact-us" className="text-blue-600 hover:underline mx-4">
          Contact Us
        </Link>
      </div>
    </main>
  );
}

// A simple reusable component for demonstration
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out text-center">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title} &rarr;</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}