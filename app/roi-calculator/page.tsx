'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function ROICalculatorPage() {
  const [averageClientValue, setAverageClientValue] = useState(34);
  const [leadsPerMonth, setLeadsPerMonth] = useState(1313);
  const [profitMargin, setProfitMargin] = useState(100);
  const [closeRate, setCloseRate] = useState(100);
  const [monthlyInvestment, setMonthlyInvestment] = useState(1500);

  const [totalNewCustomers, setTotalNewCustomers] = useState(0);
  const [monthlyRevenuePotential, setMonthlyRevenuePotential] = useState(0);
  const [grossMonthlyProfit, setGrossMonthlyProfit] = useState(0);
  const [netMonthlyProfit, setNetMonthlyProfit] = useState(0);

  // Validation handlers
  const handleAverageClientValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setAverageClientValue(0);
      return;
    }
    const numValue = Number(value);
    const validatedValue = Math.max(0, Math.min(numValue, 999999999));
    setAverageClientValue(validatedValue);
  };

  const handleLeadsPerMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setLeadsPerMonth(0);
      return;
    }
    const numValue = Number(value);
    const validatedValue = Math.max(0, Math.min(numValue, 999999));
    setLeadsPerMonth(validatedValue);
  };

  const handleProfitMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setProfitMargin(0);
      return;
    }
    const numValue = Number(value);
    const validatedValue = Math.max(0, Math.min(numValue, 100));
    setProfitMargin(validatedValue);
  };

  const handleCloseRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setCloseRate(0);
      return;
    }
    const numValue = Number(value);
    const validatedValue = Math.max(0, Math.min(numValue, 100));
    setCloseRate(validatedValue);
  };

  const handleMonthlyInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setMonthlyInvestment(0);
      return;
    }
    const numValue = Number(value);
    const validatedValue = Math.max(0, Math.min(numValue, 999999999));
    setMonthlyInvestment(validatedValue);
  };

  useEffect(() => {
    // Ensure all values are valid numbers
    const clientValue = isFinite(averageClientValue) && !isNaN(averageClientValue) ? averageClientValue : 0;
    const leads = isFinite(leadsPerMonth) && !isNaN(leadsPerMonth) ? leadsPerMonth : 0;
    const margin = isFinite(profitMargin) && !isNaN(profitMargin) ? Math.max(0, Math.min(profitMargin, 100)) : 0;
    const rate = isFinite(closeRate) && !isNaN(closeRate) ? Math.max(0, Math.min(closeRate, 100)) : 0;
    const investment = isFinite(monthlyInvestment) && !isNaN(monthlyInvestment) ? monthlyInvestment : 0;

    // Calculate Total New Customers
    const newCustomers = Math.round(leads * (rate / 100));
    setTotalNewCustomers(newCustomers);

    // Calculate Monthly Revenue Potential
    const revenue = newCustomers * clientValue;
    setMonthlyRevenuePotential(revenue);

    // Calculate Gross Monthly Profit
    const grossProfit = revenue * (margin / 100);
    setGrossMonthlyProfit(grossProfit);

    // Calculate Net Monthly Profit
    const netProfit = grossProfit - investment;
    setNetMonthlyProfit(netProfit);
  }, [averageClientValue, leadsPerMonth, profitMargin, closeRate, monthlyInvestment]);

  const formatCurrency = (value: number) => {
    // Handle NaN and Infinity
    if (!isFinite(value) || isNaN(value)) {
      return '$0.00';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">ROI Calculator</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-600"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            ROI Calculator
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
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
            {/* Left Column: Business Details */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Business Details
              </h2>
              <div className="space-y-5">
                {/* Average Client Value */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Average Client Value ($)
                  </label>
                  <input
                    type="number"
                    value={averageClientValue}
                    onChange={handleAverageClientValueChange}
                    min="0"
                    max="999999999"
                    step="1"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Number of Leads per Month */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Number of Leads per Month
                  </label>
                  <input
                    type="number"
                    value={leadsPerMonth}
                    onChange={handleLeadsPerMonthChange}
                    min="0"
                    max="999999"
                    step="1"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Profit Margin */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Profit Margin (%)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={profitMargin}
                      onChange={handleProfitMarginChange}
                      min="0"
                      max="100"
                      step="0.1"
                      className="flex-1 bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                    />
                    <span className="text-gray-600 text-lg font-medium">%</span>
                  </div>
                </div>

                {/* Close Rate */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Close Rate (%)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={closeRate}
                      onChange={handleCloseRateChange}
                      min="0"
                      max="100"
                      step="0.1"
                      className="flex-1 bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                    />
                    <span className="text-gray-600 text-lg font-medium">%</span>
                  </div>
                </div>
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
                {/* Total New Customers */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Total New Customers
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-2xl md:text-3xl font-bold">{totalNewCustomers.toLocaleString()}</span>
                  </div>
                </div>

                {/* Monthly Revenue Potential */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Monthly Revenue Potential
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-lg md:text-xl font-semibold">{formatCurrency(monthlyRevenuePotential)}</span>
                  </div>
                </div>

                {/* Gross Monthly Profit */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Gross Monthly Profit
                  </label>
                  <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-lg md:text-xl font-semibold">{formatCurrency(grossMonthlyProfit)}</span>
                  </div>
                </div>

                {/* Monthly Investment */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Monthly Investment
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={handleMonthlyInvestmentChange}
                    min="0"
                    max="999999999"
                    step="1"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                </div>

                {/* Net Monthly Profit */}
                <div>
                  <label className="block text-gray-700 font-medium text-sm mb-2">
                    Net Monthly Profit
                  </label>
                  <div className="bg-blue-600 text-white px-4 py-5 rounded-lg border border-blue-500 shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold">{formatCurrency(netMonthlyProfit)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
