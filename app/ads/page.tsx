import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, Phone, CheckCircle, Star, TrendingUp, Shield, Clock, Award, Sun, Mail, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import './ads-styles.css';
import SectionCTA from '@/components/ads/SectionCTA';

// Dynamically import heavy components
const SimpleCalculator = dynamic(() => import('@/components/ads/SimpleCalculator'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-xl"></div>,
});

const LeadForm = dynamic(() => import('@/components/forms/LeadForm'), {
  loading: () => <div className="py-16 bg-gray-50"><div className="container mx-auto px-6"><div className="animate-pulse h-96 bg-white rounded-xl"></div></div></div>,
});

export const metadata: Metadata = {
  title: 'ติดตั้งโซล่าเซลล์ ลดค่าไฟ 50-80% | รับประกันอุปกรณ์สูงสุด 30 ปี | SolarPro',
  description: 'ติดตั้งโซล่าเซลล์คุณภาพสูง ลดค่าไฟได้จริง 50-80% คืนทุนเร็ว 4-6 ปี รับประกันอุปกรณ์สูงสุด 30 ปี ปรึกษาฟรี โทร 096-041-5198',
  keywords: 'โซล่าเซลล์, ติดตั้งโซล่าเซลล์, ราคาโซล่าเซลล์, solar cell, ลดค่าไฟ',
  openGraph: {
    title: 'ติดตั้งโซล่าเซลล์ ลดค่าไฟ 50-80% | รับประกันอุปกรณ์สูงสุด 30 ปี',
    description: 'ติดตั้งโซล่าเซลล์คุณภาพสูง ลดค่าไฟได้จริง คืนทุนเร็ว รับประกันอุปกรณ์สูงสุด 30 ปี',
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
               {/* Hero Section - Above the Fold */}
        <section className="relative pt-8 pb-16 md:pb-24 min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
              alt="ติดตั้งโซล่าเซลล์บนหลังคา"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-orange-200 shadow-lg mb-6">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">ผู้นำด้านโซล่าเซลล์ในไทย</span>
              </div>

              {/* 5 Headers with Sub-headers */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    header: 'ลดค่าไฟได้จริง สูงสุด 50–80%',
                    subheader: 'ใช้ไฟจากแสงอาทิตย์ สบายใจหายห่วง',
                  },
                  {
                    header: 'คืนทุนไว คุ้มระยะยาว',
                    subheader: 'ประหยัดค่าไฟทุกเดือน ใช้ยาวหลายสิบปี',
                  },
                  {
                    header: 'ระบบเสถียร ดูแลง่าย',
                    subheader: 'ไม่มีปัญหาจุกจิกกวนใจ / ค่า Maintenance ต่ำ',
                  },
                  {
                    header: 'เพิ่มมูลค่าให้บ้านและธุรกิจ',
                    subheader: 'อาคารประหยัดพลังงาน ขายง่าย น่าเชื่อถือขึ้น',
                  },
                  {
                    header: 'พลังงานสะอาด ดีต่อโลก ดีต่อภาพลักษณ์',
                    subheader: 'ลดคาร์บอน สร้างอนาคตที่ยั่งยืน',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                        {item.header}
                      </h2>
                      <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                        {item.subheader}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://line.me/R/ti/p/@solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#06C755] rounded-xl hover:bg-[#05b34b] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  ปรึกษาฟรีทาง LINE
                </a>
                <a
                  href="tel:0960415198"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-xl hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  โทรเลย 096-041-5198
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2 text-white">
                  <span className="font-semibold">500+</span> ลูกค้าพึงพอใจ
                </div>
                <div className="flex items-center gap-1 text-white">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel Section */}
        <section className="py-12 bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 border-y border-gray-200">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm text-gray-500 mb-6">ไว้วางใจโดยแบรนด์ชั้นนำ</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {/* Duplicate logos for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-12 px-6">
                    {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5', 'Logo 6'].map((logo, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm font-medium"
                      >
                        {logo}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 via-rose-50 to-red-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                ⚠️ ปัญหาที่พบบ่อย
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                คุณกำลังเจอปัญหาเหล่านี้อยู่ไหม?
              </h2>
              <p className="text-lg text-gray-600">
                ปัญหาที่ลูกค้าหลายท่านเคยเจอมาก่อน
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: '❌',
                  title: 'สเปกไม่ตรงที่คุยกันไว้',
                  description: 'คุยว่าแผง Tier 1 แต่ติดตั้งของเกรดรอง อินเวอร์เตอร์เปลี่ยนรุ่นโดยไม่บอก ของในสัญญากับของหน้างานคนละเรื่อง',
                },
                {
                  icon: '⏰',
                  title: 'รับงานแล้วหาย / งานช้าเกินกำหนด',
                  description: 'โอนมัดจำแล้วติดต่อยาก นัดแล้วเลื่อนบ่อย งานเสร็จช้ากว่ากำหนดหลายสัปดาห์',
                },
                {
                  icon: '⚡',
                  title: 'ติดตั้งแล้วระบบไม่ตรงกับการใช้งานจริง',
                  description: 'ผลิตไฟไม่ถึงที่คาด ไม่ได้วิเคราะห์พฤติกรรมใช้ไฟก่อน วางแผงไม่เหมาะกับทิศ/เงา',
                },
                {
                  icon: '🔧',
                  title: 'งานเรียบร้อยไม่สวย / มาตรฐานต่ำ',
                  description: 'เดินสายมั่ว เจาะหลังคาแล้วรั่ว ไม่เก็บงานให้เรียบร้อย',
                },
                {
                  icon: '📞',
                  title: 'หลังการขายหายเงียบ',
                  description: 'ระบบมีปัญหา ติดต่อไม่ได้ เคลมยาก โยนให้แบรนด์ ไม่มีเช็กระบบ ล้างแผงรายปี',
                },
              ].map((pain, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{pain.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pain.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                เราเข้าใจปัญหาเหล่านี้ดี
              </p>
              <p className="text-gray-600">
                และพร้อมแก้ไขให้คุณด้วยมาตรฐานการทำงานที่ชัดเจน โปร่งใส
              </p>
            </div>

            <SectionCTA />
          </div>
        </section>

        {/* Benefits Section - Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                ✨ จุดเด่นของเรา
              </div> */}
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

            <SectionCTA />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                🔧 บริการครบวงจร
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                บริการของเรา
              </h2>
              <p className="text-lg text-gray-600">
                ครบวงจร ตั้งแต่ปรึกษา ออกแบบ ติดตั้ง จนถึงบริการหลังการขาย
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '💬',
                  title: 'ให้คำปรึกษาและวิเคราะห์การใช้ไฟ',
                  subtitle: 'Free Consultation',
                  features: [
                    'วิเคราะห์ค่าไฟย้อนหลัง',
                    'ประเมินขนาดระบบที่เหมาะสม',
                    'คำนวณความคุ้มค่า / ระยะเวลาคืนทุน',
                  ],
                },
                {
                  icon: '📐',
                  title: 'ออกแบบระบบโซลาร์เซลล์',
                  subtitle: 'System Design',
                  features: [
                    'ออกแบบตามพฤติกรรมการใช้ไฟจริง',
                    'วิเคราะห์ทิศทางแสง เงาบัง หลังคา',
                    'เลือกอุปกรณ์ให้เหมาะกับงบและเป้าหมาย',
                  ],
                },
                {
                  icon: '🔧',
                  title: 'ติดตั้งโซลาร์เซลล์ครบวงจร',
                  subtitle: 'Turnkey Solution',
                  features: [
                    'แผงโซลาร์เซลล์มาตรฐาน Tier 1',
                    'อินเวอร์เตอร์คุณภาพสูง',
                    'โครงสร้างติดตั้งแข็งแรง ได้มาตรฐาน',
                    'ติดตั้งโดยทีมช่างมืออาชีพ',
                  ],
                },
                {
                  icon: '📋',
                  title: 'ดำเนินการขออนุญาตและเอกสารกับการไฟฟ้า',
                  subtitle: '',
                  features: [
                    'ยื่นขออนุญาตติดตั้ง',
                    'จัดทำเอกสารครบถ้วน',
                  ],
                },
                {
                  icon: '✅',
                  title: 'ตรวจสอบ ทดสอบ และส่งมอบระบบ',
                  subtitle: 'Commissioning',
                  features: [
                    'ทดสอบประสิทธิภาพระบบก่อนส่งมอบ',
                    'ตั้งค่าแอป Monitoring',
                    'สอนลูกค้าใช้งานระบบอย่างละเอียด',
                  ],
                },
                {
                  icon: '🛠️',
                  title: 'บริการดูแลหลังการขายและบำรุงรักษา',
                  subtitle: 'After-sales & Maintenance',
                  features: [
                    'ตรวจเช็กระบบรายปี',
                    'ล้างแผงโซลาร์เซลล์',
                    'แก้ไขปัญหาระบบไฟฟ้าและอินเวอร์เตอร์',
                    'บริการเคลมอุปกรณ์',
                  ],
                },
                {
                  icon: '📱',
                  title: 'ระบบ Monitoring และรายงานผลการผลิตไฟฟ้า',
                  subtitle: '',
                  features: [
                    'ดูการผลิตไฟแบบ Real-time ผ่านแอป',
                    'รายงานผลการผลิตรายเดือน / รายปี',
                    'แจ้งเตือนเมื่อระบบมีปัญหา',
                  ],
                },
                {
                  icon: '⚙️',
                  title: 'บริการปรับปรุง / ขยายระบบโซลาร์เดิม',
                  subtitle: '',
                  features: [
                    'ตรวจสอบระบบโซลาร์ที่ติดตั้งอยู่แล้ว',
                    'แก้ไขงานเก่า',
                    'ขยายกำลังการผลิตเพิ่มเติม',
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-sm text-orange-500 font-medium mb-3">{service.subtitle}</p>
                  )}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-orange-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <SectionCTA />
          </div>
        </section>

        {/* Process Roadmap Section */}
        <section className="py-16 md:py-20  bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                📋 ขั้นตอนการทำงาน
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ขั้นตอนการเข้ารับบริการ
              </h2>
              <p className="text-lg text-gray-600">
                ง่ายๆ เพียง 10 ขั้นตอน ครบวงจรจบในที่เดียว
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

                {/* Steps */}
                <div className="space-y-8">
                  {[
                    {
                      step: '01',
                      title: 'ติดต่อขอคำปรึกษา',
                      details: [
                        'ลูกค้าติดต่อผ่านเว็บไซต์ / LINE / โทรศัพท์',
                        'แจ้งประเภทอาคาร (บ้าน / โรงงาน / ธุรกิจ)',
                        'ส่งบิลค่าไฟหรือข้อมูลการใช้ไฟเบื้องต้น',
                      ],
                    },
                    {
                      step: '02',
                      title: 'วิเคราะห์การใช้ไฟและประเมินความเหมาะสม',
                      details: [
                        'วิเคราะห์ค่าไฟย้อนหลัง',
                        'ประเมินขนาดระบบโซลาร์ที่เหมาะสม',
                        'คำนวณความคุ้มค่าและระยะคืนทุน (Payback)',
                      ],
                    },
                    {
                      step: '03',
                      title: 'สำรวจหน้างานจริง',
                      details: [
                        'ตรวจสอบโครงสร้างหลังคา',
                        'วิเคราะห์ทิศทางแสงแดดและเงาบัง',
                        'ประเมินความพร้อมของระบบไฟฟ้า',
                      ],
                    },
                    {
                      step: '04',
                      title: 'ออกแบบระบบและเสนอราคา',
                      details: [
                        'ออกแบบระบบเฉพาะสำหรับแต่ละหน้างาน',
                        'ระบุสเปกอุปกรณ์และระยะเวลาดำเนินงานชัดเจน',
                      ],
                    },
                    {
                      step: '05',
                      title: 'นัดวันและวางแผนติดตั้ง',
                      details: [
                        'นัดวันติดตั้ง',
                        'จัดเตรียมอุปกรณ์และทีมงาน',
                      ],
                    },
                    {
                      step: '06',
                      title: 'ติดตั้งระบบโซลาร์เซลล์',
                      details: [
                        'ติดตั้งโดยทีมช่างมืออาชีพ',
                        'ใช้อุปกรณ์ตามสเปกที่ตกลง',
                        'งานเรียบร้อย ปลอดภัย ได้มาตรฐาน',
                      ],
                    },
                    {
                      step: '07',
                      title: 'ทดสอบระบบและเปิดใช้งาน',
                      details: [
                        'ตรวจสอบระบบไฟฟ้า',
                        'ทดสอบการผลิตไฟฟ้า',
                        'เปิดใช้งานระบบอย่างเป็นทางการ',
                      ],
                    },
                    {
                      step: '08',
                      title: 'ส่งมอบงานและสอนการใช้งาน',
                      details: [
                        'แนะนำการใช้งานระบบ Monitoring',
                        'สอนดูผลการผลิตไฟผ่านแอป',
                        'ส่งมอบเอกสารรับประกันและคู่มือ',
                      ],
                    },
                    {
                      step: '09',
                      title: 'ดำเนินการขออนุญาตกับการไฟฟ้า',
                      details: [
                        'จัดทำเอกสารขออนุญาตติดตั้ง',
                        'ประสานงานกับการไฟฟ้า',
                      ],
                    },
                    {
                      step: '10',
                      title: 'บริการหลังการขายและดูแลระยะยาว',
                      details: [
                        'ตรวจเช็กระบบตามรอบ',
                        'บริการบำรุงรักษา / ล้างแผง',
                        'ดูแลการเคลมอุปกรณ์',
                      ],
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="md:flex md:items-start">
                        {/* Left side (odd) */}
                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <ul className={`space-y-2 text-sm text-gray-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  {index % 2 === 0 ? (
                                    <>
                                      <span className="flex-1">{detail}</span>
                                      <span className="text-orange-500 mt-0.5 hidden md:inline">•</span>
                                      <span className="text-orange-500 mt-0.5 md:hidden">•</span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-orange-500 mt-0.5">•</span>
                                      <span className="flex-1">{detail}</span>
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full items-center justify-center text-white font-bold shadow-lg z-10">
                          {item.step}
                        </div>

                        {/* Right side (even) */}
                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                      </div>

                      {/* Mobile view */}
                      <div className="md:hidden flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.step}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <SectionCTA />
          </div>
        </section>

        {/* Solar Benefits Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                💡 ข้อดีที่คุณได้รับ
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ข้อดีของโซล่าเซลล์
              </h2>
              <p className="text-lg text-gray-600">
                ลงทุนครั้งเดียว คุ้มค่าตลอดไป
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: '⚡',
                  title: 'ลดค่าไฟทันทีที่เปิดใช้งาน',
                  description: 'ผลิตไฟใช้เอง ทุกหน่วดคือเงินที่ประหยัดได้',
                },
                {
                  icon: '💰',
                  title: 'คืนทุนชัดเจน คุ้มค่าในระยะยาว',
                  description: 'จ่ายครั้งเดียว ประหยัดไฟยาว 20-30 ปี',
                },
                {
                  icon: '�️',
                  title: 'ค่าไฟแพงแค่ไหน ก็ไม่กระทบ',
                  description: 'ควบคุมต้นทุนพลังงานได้เอง',
                },
                {
                  icon: '🏠',
                  title: 'เพิ่มมูลค่าบ้านและธุรกิจ',
                  description: 'อาคารประหยัดพลังงาน มีราคามากขึ้น',
                },
                {
                  icon: '🔧',
                  title: 'ดูแลรักษาง่าย ค่าใช้จ่ายต่ำ',
                  description: 'ระบบเรียบง่าย ไม่จุกจิก',
                },
                {
                  icon: '🌍',
                  title: 'ใช้พลังงานสะอาด เป็นมิตรต่อโลก',
                  description: 'ลดคาร์บอน สร้างภาพลักษณ์ที่ดี',
                },
                {
                  icon: '📏',
                  title: 'เหมาะกับบ้านและธุรกิจทุกขนาด',
                  description: 'ปรับระบบได้ตามงบและการใช้งาน',
                },
                {
                  icon: '✨',
                  title: 'ใช้งานได้ทันที ไม่ต้องเปลี่ยนพฤติกรรม',
                  description: 'แค่ใช้ไฟเหมือนเดิม แต่จ่ายน้อยลง',
                },
                {
                  icon: '📈',
                  title: 'เป็นการลงทุน ไม่ใช่ค่าใช้จ่าย',
                  description: 'เงินที่จ่ายวันนี้ คือค่าไฟที่ไม่ต้องจ่ายในอนาคต',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <SectionCTA />
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                {/* <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                  🧮 คำนวณความคุ้มค่า
                </div> */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  คำนวณความคุ้มค่า
                </h2>
                <p className="text-lg text-gray-600">
                  ใส่ค่าไฟรายเดือน รับผลคำนวณทันที
                </p>
              </div>

              <SimpleCalculator />

              <SectionCTA />
            </div>
          </div>
        </section>

        {/* Reviews with Images Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12">
              {/* <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                ⭐ ความคิดเห็นลูกค้า
              </div> */}
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
                  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
                  name: 'คุณสมชาย ใจดี',
                  location: 'บางนา กรุงเทพฯ',
                  rating: 5,
                  text: 'ติดตั้งไปแล้ว 6 เดือน ค่าไฟลดลงจาก 4,000 เหลือ 800 บาท คุ้มมากครับ',
                },
                {
                  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800',
                  name: 'คุณสมหญิง รักษ์ดี',
                  location: 'ลาดพร้าว กรุงเทพฯ',
                  rating: 5,
                  text: 'ปรึกษาละเอียดมาก ออกแบบให้เหมาะกับบ้าน ติดตั้งเร็ว สะอาด',
                },
                {
                  image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800',
                  name: 'คุณวิชัย ประสบการณ์',
                  location: 'รังสิต ปทุมธานี',
                  rating: 5,
                  text: 'คุ้มค่าที่สุด! คืนทุนไวกว่าที่คิด บริการหลังการขายดีมาก',
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={review.image}
                      alt={`รีวิวจาก ${review.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SectionCTA />
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
                  href="https://line.me/R/ti/p/@solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#06C755] rounded-lg hover:bg-[#05b34b] transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  ติดต่อทาง LINE
                </a>
              </div>
              <p className="text-sm mt-6 opacity-75">*โปรโมชั่นนี้มีจำนวนจำกัด เพียง 20 ท่านแรกเท่านั้น</p>
            </div>
          </div>
        </section>

        {/* Contact Form - Removed */}

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-slate-200 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                {/* <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
                  ❓ คำถามที่พบบ่อย
                </div> */}
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

              <SectionCTA />
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
              <li className="flex items-start space-x-3">
                <address className="not-italic">123 ถนนพลังงาน แขวงสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110</address>
              </li>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/solarpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
                  aria-label="ติดตามเราบน LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
