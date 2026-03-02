'use client';

import { useState } from 'react';
import { TrendingUp, Zap, DollarSign, Calendar } from 'lucide-react';

export default function SimpleCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<string>('');
  const [dayUsagePercent, setDayUsagePercent] = useState<number>(60);
  const [result, setResult] = useState<{
    systemSize: number;
    monthlySavings: number;
    yearlySavings: number;
    estimatedCost: number;
    paybackYears: number;
  } | null>(null);

  const formatNumberWithCommas = (value: string): string => {
    // Remove all non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue === '') return '';
    
    // Convert to number and format with commas
    const num = parseInt(cleanValue, 10);
    return num.toLocaleString('en-US');
  };

  const handleInputChange = (value: string) => {
    // Remove commas and store clean value
    const cleanValue = value.replace(/,/g, '');
    setMonthlyBill(cleanValue);
  };

  const calculateSavings = (dayUsagePercent: number = 60) => {
    const bill = parseFloat(monthlyBill);
    if (!bill || bill <= 0) {
      alert('กรุณาใส่ค่าไฟที่ถูกต้อง');
      return;
    }

    // คำนวณค่าไฟกลางวัน (On-grid ใช้แค่กลางวัน)
    const dayTimeBill = bill * (dayUsagePercent / 100);
    
    // ทุก 5 kW ประหยัด 3,000 บาท
    // หมายความว่า 1 kW ประหยัด 600 บาท
    const savingsPerKW = 600;
    
    // คำนวณขนาดระบบที่ต้องการ
    const requiredKW = dayTimeBill / savingsPerKW;
    
    // ขนาดระบบที่แนะนำ: 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    const availableSizes = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    let systemSize = 3; // ขั้นต่ำ
    
    // หาขนาดที่เหมาะสม (ปัดขึ้น)
    for (const size of availableSizes) {
      if (requiredKW <= size) {
        systemSize = size;
        break;
      }
      systemSize = size; // ถ้าเกิน 50 ให้ใช้ 50
    }
    
    // คำนวณการประหยัด (ตามขนาดระบบที่แนะนำ)
    const monthlySavings = systemSize * savingsPerKW;
    const yearlySavings = monthlySavings * 12;
    
    // ราคาติดตั้ง (ประมาณ 50,000 บาทต่อ kW)
    const pricePerKW = 50000;
    const estimatedCost = systemSize * pricePerKW;
    
    // คำนวณระยะเวลาคืนทุน
    const paybackYears = parseFloat((estimatedCost / yearlySavings).toFixed(1));

    setResult({
      systemSize,
      monthlySavings,
      yearlySavings,
      estimatedCost,
      paybackYears,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH').format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              ค่าไฟฟ้าต่อเดือนของคุณ (บาท)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumberWithCommas(monthlyBill)}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  calculateSavings(dayUsagePercent);
                }
              }}
              placeholder="เช่น 10,000"
              className="w-full px-6 py-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
            <p className="mt-2 text-sm text-gray-500 text-center">
              ดูจากบิลค่าไฟฟ้าของคุณ
            </p>
          </div>

          {/* Day/Night Usage Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold text-gray-900">
                สัดส่วนการใช้ไฟกลางวัน
              </label>
              <span className="text-2xl font-bold text-orange-500">{dayUsagePercent}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={dayUsagePercent}
              onChange={(e) => setDayUsagePercent(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #FFA726 0%, #FFA726 ${dayUsagePercent}%, #e5e7eb ${dayUsagePercent}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>กลางคืน {100 - dayUsagePercent}%</span>
              <span>กลางวัน {dayUsagePercent}%</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-center">
              ระบบ On-grid จะประหยัดค่าไฟในช่วงกลางวันเท่านั้น
            </p>
          </div>

          <button
            onClick={() => calculateSavings(dayUsagePercent)}
            className="w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            คำนวณเลย
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-fade-in">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200">
            <div className="text-center">
              <p className="text-sm font-medium text-orange-600 mb-2">คุณจะประหยัดได้</p>
              <p className="text-5xl font-bold text-orange-600 mb-2">
                {formatCurrency(result.monthlySavings)} บาท
              </p>
              <p className="text-lg text-gray-700">ต่อเดือน</p>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(result.yearlySavings)} บาท/ปี
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* System Size */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">ขนาดระบบที่แนะนำ</p>
                  <p className="text-2xl font-bold text-gray-900">{result.systemSize} kW</p>
                  <p className="text-xs text-gray-500 mt-1">เหมาะสมกับการใช้ไฟของคุณ</p>
                </div>
              </div>
            </div>

            {/* Estimated Cost */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">ค่าใช้จ่ายโดยประมาณ</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(result.estimatedCost)} บาท</p>
                  <p className="text-xs text-gray-500 mt-1">รวมติดตั้งและอุปกรณ์</p>
                </div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">ระยะเวลาคืนทุน</p>
                  <p className="text-2xl font-bold text-gray-900">{result.paybackYears} ปี</p>
                  <p className="text-xs text-gray-500 mt-1">หลังจากนั้นเป็นกำไรสุทธิ</p>
                </div>
              </div>
            </div>

            {/* Lifetime Savings */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">ประหยัดรวม 25 ปี</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.yearlySavings * 25)} บาท
                  </p>
                  <p className="text-xs text-gray-500 mt-1">ตลอดอายุการใช้งาน</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-2">หมายเหตุ:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ระบบ On-grid ประหยัดค่าไฟในช่วงกลางวันเท่านั้น</li>
                  <li>• ทุก 5 kW ประหยัดได้ประมาณ 3,000 บาท/เดือน</li>
                  <li>• ผลลัพธ์เป็นการประมาณการเบื้องต้น</li>
                  <li>• ค่าใช้จ่ายจริงขึ้นอยู่กับสภาพพื้นที่และอุปกรณ์ที่เลือก</li>
                  <li>• ติดต่อเราเพื่อรับใบเสนอราคาที่แม่นยำ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
