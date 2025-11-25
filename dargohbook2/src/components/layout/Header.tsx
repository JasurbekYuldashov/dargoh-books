'use client';

import Link from 'next/link';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8" style={{ color: '#0284c7' }} />
            <span className="text-xl font-bold" style={{ color: '#111827' }}>
              Dargoh Kitoblar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="transition-colors hover:opacity-80"
              style={{ color: '#4b5563' }}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/kitoblar"
              className="transition-colors hover:opacity-80"
              style={{ color: '#4b5563' }}
            >
              Kitoblar
            </Link>
            <Link
              href="/haqida"
              className="transition-colors hover:opacity-80"
              style={{ color: '#4b5563' }}
            >
              Biz haqimizda
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: '#4b5563' }}
            aria-label="Menyu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="md:hidden py-4"
            style={{ borderTop: '1px solid #f3f4f6' }}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="transition-colors py-2"
                style={{ color: '#4b5563' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Bosh sahifa
              </Link>
              <Link
                href="/kitoblar"
                className="transition-colors py-2"
                style={{ color: '#4b5563' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Kitoblar
              </Link>
              <Link
                href="/haqida"
                className="transition-colors py-2"
                style={{ color: '#4b5563' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Biz haqimizda
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
