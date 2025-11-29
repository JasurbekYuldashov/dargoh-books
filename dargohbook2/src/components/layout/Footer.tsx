import { BookOpen, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#d1d5db' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo va tavsif */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8" style={{ color: '#38bdf8' }} />
              <span className="text-xl font-bold" style={{ color: 'white' }}>
                Dargoh Kitoblar
              </span>
            </Link>
            <p style={{ color: '#9ca3af' }}>
              Eng sara kitoblar to'plami. Bilim olish yo'lida sizga hamroh bo'lamiz.
            </p>
          </div>

          {/* Tezkor havolalar */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'white' }}>
              Tezkor havolalar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors hover:opacity-80" style={{ color: '#d1d5db' }}>
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/kitoblar" className="transition-colors hover:opacity-80" style={{ color: '#d1d5db' }}>
                  Kitoblar
                </Link>
              </li>
              <li>
                <Link href="/haqida" className="transition-colors hover:opacity-80" style={{ color: '#d1d5db' }}>
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'white' }}>Aloqa</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#38bdf8' }} />
                <span>+998 77 449 50 50</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#38bdf8' }} />
                <span>Andijon shahri</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#38bdf8' }} />
                <span>09:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-8 text-center"
          style={{ borderTop: '1px solid #1f2937', color: '#6b7280' }}
        >
          <p>&copy; {new Date().getFullYear()} Dargoh Kitoblar. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
