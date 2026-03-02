'use client';

import { useState } from 'react';
import {
  formatCurrency,
  formatCapacity,
  formatPaybackPeriod,
} from '@/lib/utils/calculator';
import type { CalculatorFormData, CalculatorResult, LocationType } from '@/types/calculator';

export default function SolarCalculator() {
  const [formData, setFormData] = useState<CalculatorFormData>({
    locationType: 'residential',
    monthlyBill: 3000,
    electricSystem: 'single-phase',
    dayNightRatio: 60,
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleLocationChange = (location: LocationType) => {
    setFormData({ ...formData, locationType: location });
    setResult(null);
    setError(null);
  };

  const formatNumberWithCommas = (num: number): string => {
    if (num === 0) return '';
    return num.toLocaleString('en-US');
  };

  const handleMonthlyBillChange = (value: string) => {
    // Remove commas from input
    const cleanValue = value.replace(/,/g, '');
    
    // If empty string, set to empty (will show placeholder)
    if (cleanValue === '') {
      setFormData({ ...formData, monthlyBill: 0 });
      setResult(null);
      setError(null);
      return;
    }
    
    // Remove all leading zeros
    const noLeadingZeros = cleanValue.replace(/^0+/, '');
    
    // If after removing zeros we have empty string, it means user typed only zeros
    if (noLeadingZeros === '') {
      setFormData({ ...formData, monthlyBill: 0 });
      setResult(null);
      setError(null);
      return;
    }
    
    // Convert to number
    const numValue = parseFloat(noLeadingZeros) || 0;
    setFormData({ ...formData, monthlyBill: numValue });
    setResult(null);
    setError(null);
  };

  const handleDayNightRatioChange = (value: number) => {
    setFormData({ ...formData, dayNightRatio: value });
    setResult(null);
    setError(null);
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setError(null);

    // Validate input
    if (!formData.monthlyBill || formData.monthlyBill <= 0) {
      setError('กรุณาใส่ค่าไฟที่ถูกต้อง');
      setIsCalculating(false);
      return;
    }

    try {
      // คำนวณค่าไฟกลางวัน (On-grid ใช้แค่กลางวัน)
      const dayTimeBill = formData.monthlyBill * (formData.dayNightRatio / 100);
      
      // ทุก 5 kW ประหยัด 3,000 บาท
      // หมายความว่า 1 kW ประหยัด 600 บาท
      const savingsPerKW = 600;
      
      // คำนวณขนาดระบบที่ต้องการ
      const requiredKW = dayTimeBill / savingsPerKW;
      
      // ขนาดระบบที่แนะนำ: 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
      const availableSizes = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
      let recommendedCapacity = 3; // ขั้นต่ำ
      
      // หาขนาดที่เหมาะสม (ปัดขึ้น)
      for (const size of availableSizes) {
        if (requiredKW <= size) {
          recommendedCapacity = size;
          break;
        }
        recommendedCapacity = size; // ถ้าเกิน 50 ให้ใช้ 50
      }
      
      // คำนวณการประหยัด (ตามขนาดระบบที่แนะนำ)
      const monthlySavings = recommendedCapacity * savingsPerKW;
      const yearlySavings = monthlySavings * 12;
      
      // ราคาติดตั้ง (ประมาณ 50,000 บาทต่อ kW)
      const pricePerKW = 50000;
      const estimatedCost = recommendedCapacity * pricePerKW;
      
      // คำนวณระยะเวลาคืนทุน
      const paybackPeriod = estimatedCost / yearlySavings;

      setResult({
        recommendedCapacity,
        estimatedCost,
        monthlySavings,
        yearlySavings,
        paybackPeriod,
        co2Reduction: 0, // ไม่ใช้ในการแสดงผล
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการคำนวณ');
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              คำนวณความคุ้มค่าโซล่าเซลล์
            </h2>
            <p className="text-lg text-gray-600">
              กรอกข้อมูลเพื่อประเมินขนาดระบบและความคุ้มค่าในการติดตั้งโซล่าเซลล์
            </p>
          </div>

          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Location Type - Only 2 choices */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                ประเภทสถานที่ติดตั้ง
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    value: 'residential' as LocationType, 
                    label: 'ที่อยู่อาศัย',
                    icon: (
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )
                  },
                  { 
                    value: 'industrial' as LocationType, 
                    label: 'โรงงานและธุรกิจ',
                    icon: (
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleLocationChange(option.value)}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-3 ${
                      formData.locationType === option.value
                        ? 'border-orange-400 bg-orange-50 shadow-md'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={formData.locationType === option.value ? 'text-orange-500' : 'text-gray-600'}>
                      {option.icon}
                    </div>
                    <div className="font-medium text-gray-900 text-center">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Bill */}
            <div className="mb-8">
              <label htmlFor="monthlyBill" className="block text-lg font-semibold text-gray-900 mb-4">
                ค่าไฟฟ้าต่อเดือน (บาท)
              </label>
              <input
                id="monthlyBill"
                type="text"
                inputMode="numeric"
                value={formatNumberWithCommas(formData.monthlyBill)}
                onChange={(e) => handleMonthlyBillChange(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="เช่น 10,000"
              />
              <p className="mt-2 text-sm text-gray-500">
                ค่าไฟฟ้าเฉลี่ยต่อเดือนจากบิลไฟฟ้าของคุณ
              </p>
            </div>

            {/* Day/Night Ratio Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label htmlFor="dayNightRatio" className="text-lg font-semibold text-gray-900">
                  สัดส่วนการใช้ไฟกลางวัน
                </label>
                <span className="text-2xl font-bold text-orange-500">{formData.dayNightRatio}%</span>
              </div>
              <div className="relative">
                <input
                  id="dayNightRatio"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={formData.dayNightRatio}
                  onChange={(e) => handleDayNightRatioChange(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #FFA726 0%, #FFA726 ${formData.dayNightRatio}%, #e5e7eb ${formData.dayNightRatio}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between mt-3 text-sm text-gray-600">
                  <span>กลางคืน {100 - formData.dayNightRatio}%</span>
                  <span>กลางวัน {formData.dayNightRatio}%</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                ระบบ On-grid จะประหยัดค่าไฟในช่วงกลางวันเท่านั้น (06:00-18:00)
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Calculate Button */}
            <button
              type="button"
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {isCalculating ? 'กำลังคำนวณ...' : 'คำนวณความคุ้มค่า'}
            </button>

            {/* Results */}
            {result && (
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  ผลการคำนวณ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recommended Capacity */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="text-sm font-medium text-orange-600 mb-2">ขนาดระบบที่แนะนำ</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatCapacity(result.recommendedCapacity)}
                    </div>
                  </div>

                  {/* Estimated Cost */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="text-sm font-medium text-orange-600 mb-2">ค่าใช้จ่ายโดยประมาณ</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatCurrency(result.estimatedCost)}
                    </div>
                  </div>

                  {/* Monthly Savings */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="text-sm font-medium text-orange-600 mb-2">ประหยัดต่อเดือน</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatCurrency(result.monthlySavings)}
                    </div>
                  </div>

                  {/* Payback Period */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="text-sm font-medium text-orange-600 mb-2">ระยะเวลาคืนทุน</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPaybackPeriod(result.paybackPeriod)}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>หมายเหตุ:</strong> ระบบ On-grid ประหยัดค่าไฟในช่วงกลางวันเท่านั้น 
                    ทุก 5 kW ประหยัดได้ประมาณ 3,000 บาท/เดือน 
                    ผลการคำนวณเป็นเพียงการประมาณการเบื้องต้น 
                    ค่าใช้จ่ายและผลประหยัดจริงอาจแตกต่างกันไปตามสภาพพื้นที่ติดตั้ง 
                    คุณภาพอุปกรณ์ และปัจจัยอื่นๆ กรุณาติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาที่แม่นยำ
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
