'use client';

import Link from 'next/link';
import { BookOpen, Search, Package, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animations';
import { TopBooksSection } from '@/components/home';
import { useEffect, useState } from 'react';

function FloatingBook({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top: '20%',
        width: size,
        height: size * 1.4,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px',
        animation: `float 4s ease-in-out ${delay}s infinite`,
        pointerEvents: 'none',
      }}
    />
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection animation="fadeInUp" delay={delay}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: isHovered
            ? '0 20px 40px rgba(0,0,0,0.15)'
            : '0 4px 6px rgba(0,0,0,0.05)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          border: '1px solid #f3f4f6',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <Icon style={{ width: '28px', height: '28px', color: '#0284c7' }} />
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#111827',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [heroButtonHover, setHeroButtonHover] = useState(false);
  const [ctaButtonHover, setCtaButtonHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero section with parallax */}
      <section style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #075985 50%, #0c4a6e 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Parallax floating books */}
        <div style={{
          position: 'absolute',
          inset: 0,
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.6,
        }}>
          <FloatingBook delay={0} left="5%" size={40} />
          <FloatingBook delay={0.5} left="15%" size={30} />
          <FloatingBook delay={1} left="25%" size={50} />
          <FloatingBook delay={1.5} left="70%" size={35} />
          <FloatingBook delay={0.3} left="80%" size={45} />
          <FloatingBook delay={0.8} left="90%" size={25} />
        </div>

        {/* Gradient overlay circles */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          transform: `translateY(${-scrollY * 0.15}px)`,
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '80px 16px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}>
          <div style={{ textAlign: 'center' }}>
            <AnimatedSection animation="fadeInUp" delay={0}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '8px 20px',
                borderRadius: '50px',
                marginBottom: '24px',
                backdropFilter: 'blur(10px)',
              }}>
                <Star style={{ width: '16px', height: '16px', color: '#fcd34d', fill: '#fcd34d' }} />
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>
                  O'zbekistondagi eng yaxshi kitob do'koni
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <h1 style={{
                fontSize: 'clamp(32px, 8vw, 64px)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '24px',
                lineHeight: 1.1,
                textShadow: '0 4px 30px rgba(0,0,0,0.2)',
              }}>
                Dargoh Kitoblar
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <p style={{
                fontSize: '20px',
                color: '#bae6fd',
                maxWidth: '600px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                Eng sara kitoblar to'plami. Bilim olish yo'lida sizga hamroh bo'lamiz.
                1000 dan ortiq kitoblar orasidan o'zingizga keraklisini toping.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="bounceIn" delay={0.4}>
              <Link
                href="/kitoblar"
                onMouseEnter={() => setHeroButtonHover(true)}
                onMouseLeave={() => setHeroButtonHover(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '18px',
                  backgroundColor: heroButtonHover ? '#f0f9ff' : 'white',
                  color: '#0369a1',
                  textDecoration: 'none',
                  boxShadow: heroButtonHover
                    ? '0 20px 40px rgba(0,0,0,0.3)'
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  transform: heroButtonHover ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Search style={{ width: '20px', height: '20px' }} />
                Kitoblarni ko'rish
                <ArrowRight style={{
                  width: '20px',
                  height: '20px',
                  transform: heroButtonHover ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }} />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: '#f8fafc',
          clipPath: 'ellipse(60% 100% at 50% 100%)',
        }} />
      </section>

      {/* Top Books */}
      <TopBooksSection />

      {/* Features */}
      <section style={{ backgroundColor: '#f8fafc', padding: '40px 16px 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection animation="fadeInUp">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '16px',
              }}>
                Nima uchun biz?
              </h2>
              <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto' }}>
                Bizning do'konimiz sizga eng yaxshi xizmatni taqdim etadi
              </p>
            </div>
          </AnimatedSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <FeatureCard
              icon={BookOpen}
              title="Keng tanlov"
              description="1000 dan ortiq turli janrdagi kitoblar. Diniy, ilmiy, badiiy va boshqalar."
              delay={0}
            />
            <FeatureCard
              icon={Package}
              title="Real vaqt mavjudligi"
              description="Har 30 daqiqada yangilanadigan ma'lumotlar. Har doim eng so'ngi holatni ko'ring."
              delay={0.15}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Qulay qidiruv"
              description="Nomi, barcode yoki narx bo'yicha tez qidiring. Filtrlash imkoniyatlari."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)',
        padding: '100px 16px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <AnimatedSection animation="fadeInUp">
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
            }}>
              Kitob qidirayapsizmi?
            </h2>
            <p style={{
              color: '#bae6fd',
              fontSize: '18px',
              marginBottom: '40px',
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}>
              Katalogimizdan kerakli kitobni toping va do'konimizga tashrif buyuring.
            </p>
            <Link
              href="/kitoblar"
              onMouseEnter={() => setCtaButtonHover(true)}
              onMouseLeave={() => setCtaButtonHover(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 40px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '18px',
                backgroundColor: 'white',
                color: '#0284c7',
                textDecoration: 'none',
                boxShadow: ctaButtonHover
                  ? '0 20px 40px rgba(0,0,0,0.3)'
                  : '0 10px 30px rgba(0,0,0,0.2)',
                transform: ctaButtonHover ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
            >
              Katalogni ko'rish
              <ArrowRight style={{
                width: '20px',
                height: '20px',
                transform: ctaButtonHover ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
