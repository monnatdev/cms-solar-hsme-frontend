import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Phone, CheckCircle, Star, TrendingUp, Shield, Clock, Award, Sun, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const SimpleCalculator = dynamic(() => import('@/components/ads/SimpleCalculator'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-xl"></div>,
});

const LeadForm = dynamic(() => import('@/components/forms/LeadForm'), {
  loading: () => <div className="py-16 bg-gray-50"><div className="container mx-auto px-6"><div className="animate-pulse h-96 bg-white rounded-xl"></div></div></div>,
});

export const metadata: Metadata = {
  title: 'ติดตั้งโซล่าเซลล์ ลดค่าไฟ 50-80% | รับประกัน 25 ปี | SolarPro',
  description: 'ติดตั้งโซล่าเซลล์คุณภาพสูง ลดค่าไฟได้จริง 50-80% คืนทุนเร็ว 4-6 ปี รับประกัน 25 ปี ปรึกษาฟรี โทร 096-041-5198',
  keywords: 'โซล่าเซลล์, ติดตั้งโซล่าเซลล์, ราคาโซล่าเซลล์, solar cell, ลดค่าไฟ',
  openGraph: {
    title: 'ติดตั้งโซล่าเซลล์ ลดค่าไฟ 50-80% | รับประกัน 25 ปี',
    description: 'ติดตั้งโซล่าเซลล์คุณภาพสูง ลดค่าไฟได้จริง คืนทุนเร็ว รับประกัน 25 ปี',
    type: 'website',
  },
};

export default function AdsLandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Custom Header for Ads Page */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-2 rounded-lg shadow-md">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">SolarPro</span>
                <span className="text-xs text-gray-600">โซลูชั่นพลังงานแสงอาทิตย์</span>
              </div>
            </Link>
            <a
              href="tel:0960415198"
              className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">โทร</span>
              <span>096-041-5198</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Above the Fold */}
        <section className="relative pt-8 pb-16 md:pb-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headline & CTA */}
              <div className="space-y-6">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-900">ผู้นำด้านโซล่าเซลล์ในไทย</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ลดค่าไฟ <span className="text-orange-500">50-80%</span>
                  <br />
                  ด้วยโซล่าเซลล์คุณภาพสูง
                </h1>

                {/* Sub-headline */}
                <p className="text-xl text-gray-600 leading-relaxed">
                  คืนทุนเร็ว 4-6 ปี • รับประกัน 25 ปี
                  <br />
                  ติดตั้งง่าย ใช้งานได้ทันที
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: TrendingUp, text: 'ประหยัดค่าไฟทันที' },
                    { icon: Shield, text: 'รับประกันยาวนาน' },
                    { icon: Clock, text: 'ติดตั้งเร็ว 1-2 วัน' },
                    { icon: Award, text: 'มาตรฐานสากล' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <benefit.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    รับคำปรึกษาฟรี
                  </a>
                  <a
                    href="#calculator"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    คำนวณความคุ้มค่า
                  </a>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">500+</span> ลูกค้าพึงพอใจ
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="ml-1">4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                    alt="ติดตั้งโซล่าเซลล์บนหลังคา"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-500">50-80%</div>
                        <div className="text-xs text-gray-600">ลดค่าไฟ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">4-6 ปี</div>
                        <div className="text-xs text-gray-600">คืนทุน</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">25 ปี</div>
                        <div className="text-xs text-gray-600">รับประกัน</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ทำไมต้องเลือกเรา
              </h2>
              <p className="text-lg text-gray-600">
                มากกว่าแค่ติดตั้งโซล่าเซลล์ เราดูแลคุณตลอดอายุการใช้งาน
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '💰',
                  title: 'ประหยัดค่าไฟจริง',
                  description: 'ลดค่าไฟได้ 50-80% ทันทีที่เริ่มใช้งาน คืนทุนเร็วภายใน 4-6 ปี',
                },
                {
                  icon: '🛡️',
                  title: 'รับประกันยาวนาน',
                  description: 'รับประกันแผงโซล่าเซลล์ 25 ปี อินเวอร์เตอร์ 10 ปี พร้อมบริการหลังการขาย',
                },
                {
                  icon: '⚡',
                  title: 'ติดตั้งรวดเร็ว',
                  description: 'ทีมช่างมืออาชีพ ติดตั้งเสร็จภายใน 1-2 วัน ใช้งานได้ทันที',
                },
                {
                  icon: '🏆',
                  title: 'คุณภาพมาตรฐาน',
                  description: 'อุปกรณ์คุณภาพสูง ผ่านมาตรฐานสากล TUV, IEC รับรองโดย กฟน.',
                },
                {
                  icon: '📊',
                  title: 'ตรวจสอบได้ตลอดเวลา',
                  description: 'ระบบ Monitoring แบบ Real-time ดูผลการผลิตไฟฟ้าผ่านมือถือ',
                },
                {
                  icon: '💡',
                  title: 'ปรึกษาฟรี',
                  description: 'ทีมวิศวกรให้คำปรึกษาฟรี ออกแบบระบบให้เหมาะกับบ้านคุณ',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  คำนวณความคุ้มค่า
                </h2>
                <p className="text-lg text-gray-600">
                  ใส่ค่าไฟรายเดือน รับผลคำนวณทันที
                </p>
              </div>

              <SimpleCalculator />
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ลูกค้าพูดถึงเรา
              </h2>
              <p className="text-lg text-gray-600">
                มากกว่า 500 ครอบครัวที่ไว้วางใจเรา
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'คุณสมชาย ใจดี',
                  location: 'บางนา กรุงเทพฯ',
                  rating: 5,
                  text: 'ติดตั้งไปแล้ว 6 เดือน ค่าไฟลดลงจาก 4,000 เหลือ 800 บาท คุ้มมากครับ ทีมงานมืออาชีพ',
                  savings: 'ประหยัด 3,200 บาท/เดือน',
                },
                {
                  name: 'คุณสมหญิง รักษ์ดี',
                  location: 'ลาดพร้าว กรุงเทพฯ',
                  rating: 5,
                  text: 'ปรึกษาละเอียดมาก ออกแบบให้เหมาะกับบ้าน ติดตั้งเร็ว สะอาด ประทับใจมากค่ะ',
                  savings: 'ประหยัด 2,800 บาท/เดือน',
                },
                {
                  name: 'คุณวิชัย ประสบการณ์',
                  location: 'รังสิต ปทุมธานี',
                  rating: 5,
                  text: 'คุ้มค่าที่สุด! คืนทุนไวกว่าที่คิด บริการหลังการขายดีมาก แนะนำเลยครับ',
                  savings: 'ประหยัด 4,500 บาท/เดือน',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <div className="mt-2 inline-block bg-orange-50 px-3 py-1 rounded-full">
                      <p className="text-xs font-semibold text-orange-600">{testimonial.savings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency / Limited Offer */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="font-semibold text-sm">🔥 โปรโมชั่นพิเศษ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ติดต่อวันนี้ รับส่วนลดพิเศษ 10%
              </h2>
              <p className="text-xl mb-8 opacity-90">
                + ฟรี! ค่าออกแบบและสำรวจหน้างาน มูลค่า 5,000 บาท
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0960415198"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-orange-600 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  โทรเลย 096-041-5198
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  กรอกฟอร์มติดต่อกลับ
                </a>
              </div>
              <p className="text-sm mt-6 opacity-75">*โปรโมชั่นนี้มีจำนวนจำกัด เพียง 20 ท่านแรกเท่านั้น</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <LeadForm />

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  คำถามที่พบบ่อย
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: 'ติดตั้งโซล่าเซลล์แล้วจะประหยัดค่าไฟได้จริงหรือ?',
                    a: 'ได้จริงครับ! โดยเฉลี่ยลูกค้าของเราประหยัดค่าไฟได้ 50-80% ขึ้นอยู่กับขนาดระบบและการใช้ไฟฟ้า',
                  },
                  {
                    q: 'ใช้เวลาติดตั้งนานแค่ไหน?',
                    a: 'ติดตั้งเสร็จภายใน 1-2 วัน สำหรับบ้านพักอาศัยทั่วไป ใช้งานได้ทันทีหลังติดตั้ง',
                  },
                  {
                    q: 'คืนทุนใช้เวลานานไหม?',
                    a: 'โดยเฉลี่ยคืนทุนภายใน 4-6 ปี หลังจากนั้นเป็นกำไรสุทธิ และระบบใช้งานได้นานกว่า 25 ปี',
                  },
                  {
                    q: 'ถ้าฝนตกหรือมีเมฆมาก จะผลิตไฟได้ไหม?',
                    a: 'ผลิตได้ครับ แต่จะน้อยกว่าวันที่แดดดี ระบบจะใช้ไฟจากการไฟฟ้าเสริมอัตโนมัติ',
                  },
                  {
                    q: 'ต้องดูแลรักษายุ่งยากไหม?',
                    a: 'ไม่ยุ่งยากเลยครับ แค่ล้างแผงโซล่าเซลล์ปีละ 1-2 ครั้ง ระบบจะทำงานอัตโนมัติทั้งหมด',
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  >
                    <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      <span className="text-base">{faq.q}</span>
                      <CheckCircle className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              พร้อมเริ่มต้นประหยัดค่าไฟแล้วหรือยัง?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              ปรึกษาฟรี ไม่มีค่าใช้จ่าย รับใบเสนอราคาภายใน 24 ชั่วโมง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0960415198"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                โทร 096-041-5198
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                กรอกฟอร์มติดต่อกลับ
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Full Footer for Ads Page */}
      <footer className="bg-[#0F172A] text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info with gradient logo */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-2 rounded-lg shadow-md">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">SolarPro</span>
                  <span className="text-xs text-gray-400">โซลูชั่นพลังงานแสงอาทิตย์</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                ผู้นำด้านการติดตั้งระบบโซล่าเซลล์ มอบโซลูชั่นพลังงานสะอาดและหมุนเวียนสำหรับบ้านและธุรกิจ
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">ลิงก์ด่วน</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-orange-400 transition-colors">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-orange-400 transition-colors">
                    บริการ
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-orange-400 transition-colors">
                    ผลงาน
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-orange-400 transition-colors">
                    บทความ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">ติดต่อเรา</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:0960415198"
                    className="hover:text-orange-400 transition-colors"
                  >
                    096-041-5198
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@solarpro.co.th"
                    className="hover:text-orange-400 transition-colors"
                  >
                    info@solarpro.co.th
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <address className="not-italic">123 ถนนพลังงาน แขวงสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110</address>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">ติดตามเรา</h4>
              <p className="text-sm text-gray-400">
                ติดตามเราบนโซเชียลมีเดียเพื่อรับข้อมูลและเคล็ดลับเกี่ยวกับพลังงานแสงอาทิตย์
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} SolarPro โซลูชั่นพลังงานแสงอาทิตย์ สงวนลิขสิทธิ์
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
