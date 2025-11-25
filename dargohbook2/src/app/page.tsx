import Link from 'next/link';
import { BookOpen, Search, Package, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dargoh Kitoblar
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Eng sara kitoblar to'plami. Bilim olish yo'lida sizga hamroh bo'lamiz.
              1000 dan ortiq kitoblar orasidan o'zingizga keraklisini toping.
            </p>
            <Link
              href="/kitoblar"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <Search className="w-5 h-5" />
              Kitoblarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Xususiyatlar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun biz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keng tanlov</h3>
              <p className="text-gray-600">
                1000 dan ortiq turli janrdagi kitoblar. Diniy, ilmiy, badiiy va boshqalar.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real vaqt mavjudligi</h3>
              <p className="text-gray-600">
                Har 30 daqiqada yangilanadigan ma'lumotlar. Har doim eng so'ngi holatni ko'ring.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qulay qidiruv</h3>
              <p className="text-gray-600">
                Nomi, barcode yoki narx bo'yicha tez qidiring. Filtrlash imkoniyatlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Kitob qidirayapsizmi?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Katalogimizdan kerakli kitobni toping va do'konimizga tashrif buyuring.
          </p>
          <Link
            href="/kitoblar"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Katalogni ko'rish
          </Link>
        </div>
      </section>
    </div>
  );
}
