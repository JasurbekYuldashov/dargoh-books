import { BookOpen, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo va tavsif */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Dargoh Kitoblar</span>
            </Link>
            <p className="text-gray-400">
              Eng sara kitoblar to'plami. Bilim olish yo'lida sizga hamroh bo'lamiz.
            </p>
          </div>

          {/* Tezkor havolalar */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/kitoblar" className="hover:text-primary-400 transition-colors">
                  Kitoblar
                </Link>
              </li>
              <li>
                <Link href="/haqida" className="hover:text-primary-400 transition-colors">
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+998 95 159 01 02</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Andijon shahri</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>09:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dargoh Kitoblar. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
