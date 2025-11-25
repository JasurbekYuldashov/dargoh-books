'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, X, Home, Book, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  mobile?: boolean;
}

function NavLink({ href, children, onClick, icon, mobile = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          color: isActive ? '#0284c7' : '#374151',
          padding: '16px 24px',
          backgroundColor: isActive ? '#f0f9ff' : 'transparent',
          fontWeight: isActive ? 600 : 500,
          fontSize: '16px',
          transition: 'all 0.2s ease',
          textDecoration: 'none',
          borderLeft: isActive ? '4px solid #0284c7' : '4px solid transparent',
        }}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isActive ? '#0284c7' : isHovered ? '#0284c7' : '#4b5563',
        fontWeight: isActive ? 600 : 500,
        transition: 'all 0.2s ease',
        position: 'relative',
        textDecoration: 'none',
        padding: '8px 0',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#0284c7',
          transform: isActive || isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.2s ease',
        }}
      />
    </Link>
  );
}

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.95)' : 'white',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '64px',
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen style={{ width: '22px', height: '22px', color: 'white' }} />
              </div>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#111827',
                }}
              >
                Dargoh Kitoblar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '32px',
              }}
              className="md:!flex"
            >
              <NavLink href="/">Bosh sahifa</NavLink>
              <NavLink href="/kitoblar">Kitoblar</NavLink>
              <NavLink href="/haqida">Biz haqimizda</NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:!hidden"
              style={{
                padding: '10px',
                color: '#374151',
                background: '#f3f4f6',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Menyu"
            >
              <Menu style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 100,
          opacity: isDrawerOpen ? 1 : 0,
          visibility: isDrawerOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          maxWidth: '85vw',
          backgroundColor: 'white',
          zIndex: 101,
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookOpen style={{ width: '18px', height: '18px', color: 'white' }} />
            </div>
            <span style={{ fontWeight: 600, color: '#111827' }}>Menyu</span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              padding: '8px',
              color: '#6b7280',
              background: '#f3f4f6',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Yopish"
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav style={{ flex: 1, paddingTop: '8px' }}>
          <NavLink
            href="/"
            onClick={() => setIsDrawerOpen(false)}
            icon={<Home style={{ width: '20px', height: '20px' }} />}
            mobile
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            href="/kitoblar"
            onClick={() => setIsDrawerOpen(false)}
            icon={<Book style={{ width: '20px', height: '20px' }} />}
            mobile
          >
            Kitoblar
          </NavLink>
          <NavLink
            href="/haqida"
            onClick={() => setIsDrawerOpen(false)}
            icon={<Info style={{ width: '20px', height: '20px' }} />}
            mobile
          >
            Biz haqimizda
          </NavLink>
        </nav>

        {/* Drawer Footer */}
        <div
          style={{
            padding: '20px 24px',
            borderTop: '1px solid #f3f4f6',
            backgroundColor: '#f9fafb',
          }}
        >
          <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
            © 2024 Dargoh Kitoblar
          </p>
        </div>
      </div>
    </>
  );
}
