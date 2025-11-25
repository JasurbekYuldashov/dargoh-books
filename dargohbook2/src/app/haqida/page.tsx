import { BookOpen, MapPin, Phone, Clock, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Biz haqimizda</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Dargoh Kitoblar - bilim va ma'rifat yo'lida sizning ishonchli hamrohingiz
            </p>
          </div>
        </div>
      </section>

      {/* Haqida */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bizning maqsadimiz</h2>
              <p className="text-gray-600 mb-4">
                Dargoh Kitoblar do'koni sizga eng sifatli va foydali kitoblarni taqdim etish maqsadida
                tashkil etilgan. Biz kitob orqali bilim tarqatish va jamiyatni ma'rifatli qilish
                yo'lida xizmat qilamiz.
              </p>
              <p className="text-gray-600 mb-4">
                Do'konimizda diniy, ilmiy, badiiy, bolalar adabiyoti va boshqa ko'plab
                janrlardagi kitoblarni topishingiz mumkin.
              </p>
              <p className="text-gray-600">
                Har bir kitob diqqat bilan tanlanadi va sifati tekshiriladi.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-gray-600">Kitoblar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Mualliflar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-gray-600">Xaridorlar</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-gray-600">Yillik tajriba</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qadriyatlar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Bizning qadriyatlarimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sifat</h3>
              <p className="text-gray-600">
                Faqat sifatli va foydali kitoblarni tanlaymiz
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Xizmat</h3>
              <p className="text-gray-600">
                Xaridorlarimizga eng yaxshi xizmat ko'rsatamiz
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ishonch</h3>
              <p className="text-gray-600">
                Xaridorlarimiz bilan ishonchli munosabat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aloqa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Biz bilan bog'laning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="text-gray-600">+998 95 159 01 02</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Manzil</h3>
                <p className="text-gray-600">Andijon shahri</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ish vaqti</h3>
                <p className="text-gray-600">Har kuni 09:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
