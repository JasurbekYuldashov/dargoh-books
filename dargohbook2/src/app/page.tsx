import Link from 'next/link';
import { BookOpen, Search, Package, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section style={{ background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'white' }}>
              Dargoh Kitoblar
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#bae6fd' }}>
              Eng sara kitoblar to'plami. Bilim olish yo'lida sizga hamroh bo'lamiz.
              1000 dan ortiq kitoblar orasidan o'zingizga keraklisini toping.
            </p>
            <Link
              href="/kitoblar"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{ backgroundColor: 'white', color: '#0369a1' }}
            >
              <Search className="w-5 h-5" />
              Kitoblarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Xususiyatlar */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#111827' }}>
            Nima uchun biz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <BookOpen className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>
                Keng tanlov
              </h3>
              <p style={{ color: '#4b5563' }}>
                1000 dan ortiq turli janrdagi kitoblar. Diniy, ilmiy, badiiy va boshqalar.
              </p>
            </div>
            <div
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <Package className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>
                Real vaqt mavjudligi
              </h3>
              <p style={{ color: '#4b5563' }}>
                Har 30 daqiqada yangilanadigan ma'lumotlar. Har doim eng so'ngi holatni ko'ring.
              </p>
            </div>
            <div
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>
                Qulay qidiruv
              </h3>
              <p style={{ color: '#4b5563' }}>
                Nomi, barcode yoki narx bo'yicha tez qidiring. Filtrlash imkoniyatlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>
            Kitob qidirayapsizmi?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#4b5563' }}>
            Katalogimizdan kerakli kitobni toping va do'konimizga tashrif buyuring.
          </p>
          <Link
            href="/kitoblar"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: '#0284c7', color: 'white' }}
          >
            Katalogni ko'rish
          </Link>
        </div>
      </section>
    </div>
  );
}
