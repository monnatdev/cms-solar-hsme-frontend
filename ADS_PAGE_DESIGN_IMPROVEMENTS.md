# การปรับปรุงดีไซน์หน้า /ads

## สรุปการเปลี่ยนแปลง

ได้สร้างไฟล์ `app/ads/ads-styles.css` และ import เข้าไปในหน้า ads แล้ว

## วิธีการปรับปรุงแต่ละ Section

### 1. Hero Section
**เปลี่ยนจาก:**
```tsx
<section className="relative pt-8 pb-16 md:pb-24 bg-gray-50">
```

**เป็น:**
```tsx
<section className="relative pt-8 pb-16 md:pb-24 bg-gradient-orange-light overflow-hidden">
  {/* เพิ่ม decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
```

**ปรับ Trust Badge:**
```tsx
<div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-orange-200 shadow-sm pulse-glow">
```

**ปรับ Key Benefits cards:**
```tsx
<div className="flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-orange-100">
```

**ปรับ LINE Button:**
```tsx
<a className="... rounded-xl hover:scale-105 shadow-xl">
```

### 2. Logo Carousel Section
**เปลี่ยนจาก:**
```tsx
<section className="py-12 bg-white border-y border-gray-200">
```

**เป็น:**
```tsx
<section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100">
```

**ปรับ Logo cards:**
```tsx
<div className="... bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
```

### 3. Pain Points Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-gray-50">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-red-light relative overflow-hidden">
  <div className="absolute inset-0 section-pattern-dots"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="text-center mb-12">
  <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    ⚠️ ปัญหาที่พบบ่อย
  </div>
  <h2 className="...">
```

**ปรับ Pain cards:**
```tsx
<div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 card-hover-lift">
```

**เพิ่ม Summary box:**
```tsx
<div className="text-center mt-12 bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg border border-orange-100">
```

### 4. Why Choose Us Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-white">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-to-br from-white via-orange-50/30 to-white relative">
  <div className="absolute inset-0 section-pattern-grid opacity-50"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="text-center mb-12">
  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    ✨ จุดเด่นของเรา
  </div>
```

**ปรับ Benefit cards:**
```tsx
<div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 card-hover-lift border border-gray-100">
```

### 5. Services Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-white">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-blue-light relative">
  <div className="absolute inset-0 section-pattern-dots"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    🔧 บริการครบวงจร
  </div>
```

**ปรับ Service cards:**
```tsx
<div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 card-hover-lift border border-blue-100">
```

### 6. Process Roadmap Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-gray-50">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative">
  <div className="absolute inset-0 section-pattern-grid opacity-30"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    📋 ขั้นตอนการทำงาน
  </div>
```

**ปรับ Step cards:**
```tsx
<div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
```

**ปรับ Timeline dots:**
```tsx
<div className="... bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl">
```

### 7. Solar Benefits Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-white">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-green-light relative">
  <div className="absolute inset-0 section-pattern-dots"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    💡 ข้อดีที่คุณได้รับ
  </div>
```

**ปรับ Benefit cards:**
```tsx
<div className="flex gap-4 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 card-hover-lift border border-green-100">
```

### 8. Calculator Section
**เปลี่ยนจาก:**
```tsx
<section id="calculator" className="py-16 md:py-20 bg-gray-50">
```

**เป็น:**
```tsx
<section id="calculator" className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative">
  <div className="absolute inset-0 section-pattern-grid opacity-30"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    🧮 คำนวณความคุ้มค่า
  </div>
```

### 9. Reviews Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-white">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-to-br from-white via-orange-50/20 to-white relative">
  <div className="absolute inset-0 section-pattern-dots"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    ⭐ ความคิดเห็นลูกค้า
  </div>
```

**ปรับ Review cards:**
```tsx
<div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover-lift border border-gray-100">
```

### 10. Urgency/Limited Offer Section
**ปรับ gradient:**
```tsx
<section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
  </div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**ปรับ Badge:**
```tsx
<div className="inline-block bg-white/30 backdrop-blur-md px-4 py-2 rounded-full mb-6 pulse-glow">
```

**ปรับ Buttons:**
```tsx
<a className="... rounded-xl hover:scale-105 shadow-2xl">
```

### 11. FAQ Section
**เปลี่ยนจาก:**
```tsx
<section className="py-16 md:py-20 bg-gray-50">
```

**เป็น:**
```tsx
<section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
  <div className="absolute inset-0 section-pattern-grid opacity-20"></div>
  <div className="container mx-auto px-6 md:px-12 relative z-10">
```

**เพิ่ม Badge:**
```tsx
<div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
    ❓ คำถามที่พบบ่อย
  </div>
```

**ปรับ FAQ cards:**
```tsx
<details className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
```

## สรุป Color Scheme แต่ละ Section

1. **Hero** - Orange gradient (warm, inviting)
2. **Logo Carousel** - Gray gradient (neutral, professional)
3. **Pain Points** - Red gradient (alert, attention)
4. **Why Choose Us** - Orange/White gradient (trust, quality)
5. **Services** - Blue gradient (professional, reliable)
6. **Process** - Orange gradient (action, process)
7. **Benefits** - Green gradient (positive, eco-friendly)
8. **Calculator** - Orange gradient (interactive, engaging)
9. **Reviews** - White/Orange gradient (social proof)
10. **Urgency** - Orange solid (urgent, action)
11. **FAQ** - Gray gradient (informative, calm)

## การใช้งาน

1. ไฟล์ CSS ถูก import แล้วใน `app/ads/page.tsx`
2. คัดลอก code จากเอกสารนี้ไปแทนที่ใน section ที่ต้องการ
3. ทดสอบและปรับแต่งตามความเหมาะสม
