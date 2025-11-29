import { BookOpen, MapPin, Phone, Clock, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #0284c7 0%, #075985 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'white' }}>
              Biz haqimizda
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#bae6fd' }}>
              Dargoh Kitoblar - bilim va ma'rifat yo'lida sizning ishonchli hamrohingiz
            </p>
          </div>
        </div>
      </section>

      {/* Haqida */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>
                Bizning maqsadimiz
              </h2>
              <p className="mb-4" style={{ color: '#4b5563' }}>
                Dargoh Kitoblar do'koni sizga eng sifatli va foydali kitoblarni taqdim etish maqsadida
                tashkil etilgan. Biz kitob orqali bilim tarqatish va jamiyatni ma'rifatli qilish
                yo'lida xizmat qilamiz.
              </p>
              <p className="mb-4" style={{ color: '#4b5563' }}>
                Do'konimizda diniy, ilmiy, badiiy, bolalar adabiyoti va boshqa ko'plab
                janrlardagi kitoblarni topishingiz mumkin.
              </p>
              <p style={{ color: '#4b5563' }}>
                Har bir kitob diqqat bilan tanlanadi va sifati tekshiriladi.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#f0f9ff' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0284c7' }}>1000+</div>
                  <div style={{ color: '#4b5563' }}>Kitoblar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0284c7' }}>500+</div>
                  <div style={{ color: '#4b5563' }}>Mualliflar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0284c7' }}>1000+</div>
                  <div style={{ color: '#4b5563' }}>Xaridorlar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0284c7' }}>5+</div>
                  <div style={{ color: '#4b5563' }}>Yillik tajriba</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qadriyatlar */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#111827' }}>
            Bizning qadriyatlarimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl p-6 shadow-sm text-center" style={{ backgroundColor: 'white' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <BookOpen className="w-8 h-8" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>Sifat</h3>
              <p style={{ color: '#4b5563' }}>
                Faqat sifatli va foydali kitoblarni tanlaymiz
              </p>
            </div>
            <div className="rounded-xl p-6 shadow-sm text-center" style={{ backgroundColor: 'white' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <Users className="w-8 h-8" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>Xizmat</h3>
              <p style={{ color: '#4b5563' }}>
                Xaridorlarimizga eng yaxshi xizmat ko'rsatamiz
              </p>
            </div>
            <div className="rounded-xl p-6 shadow-sm text-center" style={{ backgroundColor: 'white' }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <Heart className="w-8 h-8" style={{ color: '#0284c7' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#111827' }}>Ishonch</h3>
              <p style={{ color: '#4b5563' }}>
                Xaridorlarimiz bilan ishonchli munosabat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aloqa */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#111827' }}>
            Biz bilan bog'laning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <Phone className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#111827' }}>Telefon</h3>
                <p style={{ color: '#4b5563' }}>+998 77 449 50 50</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <MapPin className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#111827' }}>Manzil</h3>
                <p style={{ color: '#4b5563' }}>Andijon shahri</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#e0f2fe' }}
              >
                <Clock className="w-6 h-6" style={{ color: '#0284c7' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#111827' }}>Ish vaqti</h3>
                <p style={{ color: '#4b5563' }}>Har kuni 08:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
