'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const MONTHLY_CHARGE = 297;

export default function ROICalculatorPage() {
  const [averageClientValue, setAverageClientValue] = useState('');
  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState('');
  const [closeRate, setCloseRate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    recoveredCustomers: 0,
    monthlyLeftOnTable: 0,
    netMonthlyProfit: 0,
    roi: 0,
  });

  const handleCalculate = () => {
    const clientValue = parseFloat(averageClientValue) || 0;
    const missedCalls = parseFloat(missedCallsPerMonth) || 0;
    const rate = parseFloat(closeRate) || 0;

    // Recovered Customers = Missed Calls × Close Rate
    const recoveredCustomers = Math.round(missedCalls * (rate / 100));

    // Monthly $$$ Left on Table = Recovered Customers × Average Client Value
    const monthlyLeftOnTable = recoveredCustomers * clientValue;

    // Net Monthly Profit = Money Left on Table - Our Charge
    const netMonthlyProfit = monthlyLeftOnTable - MONTHLY_CHARGE;

    // ROI = ((Money Left on Table - Our Charge) / Our Charge) × 100
    const roi = MONTHLY_CHARGE > 0 ? ((monthlyLeftOnTable - MONTHLY_CHARGE) / MONTHLY_CHARGE) * 100 : 0;

    setResults({
      recoveredCustomers,
      monthlyLeftOnTable,
      netMonthlyProfit,
      roi,
    });
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    if (!isFinite(value) || isNaN(value)) {
      return '$0';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    if (!isFinite(value) || isNaN(value)) {
      return '0%';
    }
    return `${Math.round(value)}%`;
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Page Title */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Missed Call Text Back
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Calculate your potential return on investment
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Input Fields */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Your Business Details
              </h2>
              <div className="space-y-5">
                {/* Average Client Value */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Average Client Value:
                  </label>
                  <input
                    type="number"
                    value={averageClientValue}
                    onChange={(e) => setAverageClientValue(e.target.value)}
                    placeholder="Enter amount"
                    min="0"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Missed Calls Per Month */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Missed Calls Per Month:
                  </label>
                  <input
                    type="number"
                    value={missedCallsPerMonth}
                    onChange={(e) => setMissedCallsPerMonth(e.target.value)}
                    placeholder="Enter number"
                    min="0"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Average Close Rate */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Average Close Rate (%):
                  </label>
                  <input
                    type="number"
                    value={closeRate}
                    onChange={(e) => setCloseRate(e.target.value)}
                    placeholder="Enter percentage"
                    min="0"
                    max="100"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg shadow-md transition-all duration-200 text-base mt-2"
                >
                  Calculate My ROI
                </button>
              </div>
            </motion.div>

            {/* Right Column: Potential Revenue */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Potential Revenue
              </h2>

              <div className="space-y-5">
                {/* Recovered Customers */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Recovered Customers
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-2xl md:text-3xl font-bold">
                      {showResults ? results.recoveredCustomers.toLocaleString() : '—'}
                    </span>
                  </div>
                </div>

                {/* Monthly $$$ Left on Table */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Monthly $$$ Left on Table
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-lg md:text-xl font-semibold">
                      {showResults ? formatCurrency(results.monthlyLeftOnTable) : '—'}
                    </span>
                  </div>
                </div>

                {/* We Charge */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    We Charge
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-lg md:text-xl font-semibold">
                      {formatCurrency(MONTHLY_CHARGE)}/month
                    </span>
                  </div>
                </div>

                {/* Net Monthly Profit */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Net Monthly Profit
                  </label>
                  <div className="bg-blue-600 text-white px-4 py-5 rounded-lg border border-blue-500 shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold">
                      {showResults ? formatCurrency(results.netMonthlyProfit) : '—'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Stop Losing Customers?"
        description="Let's set up Missed Call Text Back for your business and start recovering lost revenue today."
      />

      <Footer />
    </main>
  );
}
