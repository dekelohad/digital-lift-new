'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, Clock, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '@/lib/animations';

export default function AIReceptionistCalendarBookingPage() {
  // ROI Calculator state with AI-specific defaults
  const [averageClientValue, setAverageClientValue] = useState(5000);
  const [leadsPerMonth, setLeadsPerMonth] = useState(50);
  const [profitMargin, setProfitMargin] = useState(40);
  const [closeRate, setCloseRate] = useState(35); // Higher close rate with 24/7 AI answering
  const [monthlyInvestment, setMonthlyInvestment] = useState(497); // Typical AI receptionist service cost

  const [totalNewCustomers, setTotalNewCustomers] = useState(0);
  const [monthlyRevenuePotential, setMonthlyRevenuePotential] = useState(0);
  const [grossMonthlyProfit, setGrossMonthlyProfit] = useState(0);
  const [netMonthlyProfit, setNetMonthlyProfit] = useState(0);

  const calculatorRef = useRef(null);
  const calculatorInView = useInView(calculatorRef, { once: true, margin: '-100px' });

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
    const clientValue = isFinite(averageClientValue) && !isNaN(averageClientValue) ? averageClientValue : 0;
    const leads = isFinite(leadsPerMonth) && !isNaN(leadsPerMonth) ? leadsPerMonth : 0;
    const margin = isFinite(profitMargin) && !isNaN(profitMargin) ? Math.max(0, Math.min(profitMargin, 100)) : 0;
    const rate = isFinite(closeRate) && !isNaN(closeRate) ? Math.max(0, Math.min(closeRate, 100)) : 0;
    const investment = isFinite(monthlyInvestment) && !isNaN(monthlyInvestment) ? monthlyInvestment : 0;

    const newCustomers = Math.round(leads * (rate / 100));
    setTotalNewCustomers(newCustomers);

    const revenue = newCustomers * clientValue;
    setMonthlyRevenuePotential(revenue);

    const grossProfit = revenue * (margin / 100);
    setGrossMonthlyProfit(grossProfit);

    const netProfit = grossProfit - investment;
    setNetMonthlyProfit(netProfit);
  }, [averageClientValue, leadsPerMonth, profitMargin, closeRate, monthlyInvestment]);

  const formatCurrency = (value: number) => {
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
  const stats = [
    {
      percentage: "90%",
      description: "of leads prefer to book appointments immediately when ready."
    },
    {
      percentage: "3x",
      description: "more bookings when leads can schedule directly without waiting."
    },
    {
      percentage: "100%",
      description: "call answer rate with AI assistant handling every inquiry."
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "24/7 AI Phone Assistant",
      description: "An intelligent AI assistant answers every call professionally, answers common questions, and qualifies leads so you only talk to serious prospects who are ready to book. Works around the clock, even when you're unavailable."
    },
    {
      icon: Calendar,
      title: "Automatic Calendar Booking",
      description: "Qualified leads can book appointments directly into your calendar in real-time. No back-and-forth texts, no missed scheduling opportunities, and no double-bookings. Your calendar stays organized automatically."
    },
    {
      icon: Zap,
      title: "Never Lose a Lead",
      description: "Every call is answered, every lead is captured, and every booking opportunity is converted—even when you're busy on a job site or after hours. Your business never sleeps."
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Works seamlessly with your existing calendar system and sends you instant notifications for every booking. You're always in the loop without being interrupted by every call."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              AI Receptionist with Calendar Booking That Never Misses an Opportunity
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 mb-3 sm:mb-4">
                  {stat.percentage}
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-20 px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              See a short demo below
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-2xl border-2 border-gray-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-white m-4 rounded-lg shadow-inner">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xl font-bold text-gray-900">AI Assistant Call</div>
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">AI: "I can help you schedule an appointment. What day works best?"</p>
                    <p className="text-gray-900 font-semibold mt-2">Caller: "How about Tuesday at 2pm?"</p>
                    <p className="text-sm text-gray-600 mt-2">AI: "Perfect! I've booked you for Tuesday at 2pm. You'll receive a confirmation shortly."</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-700 font-semibold">✓ Appointment booked in calendar</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 px-4">
            What Is AI Receptionist with Calendar Booking?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto">
            AI Receptionist with Calendar Booking uses intelligent AI to answer every call, qualify leads, and book appointments directly into your calendar. Never miss a call or lose a booking opportunity, even when you're unavailable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{feature.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section ref={calculatorRef} className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={calculatorInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Calculate Your ROI with AI Receptionist
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              See how much revenue you could generate when every call is answered and every lead is captured, even when you're unavailable.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Business Details */}
              <motion.div
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
                variants={fadeInUp}
                initial="hidden"
                animate={calculatorInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Your Business Details
                </h3>
                <div className="space-y-5">
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

                  <div>
                    <label className="block text-gray-700 font-medium text-sm mb-2">
                      Close Rate with AI (%)
                      <span className="text-xs text-gray-500 ml-2">(Higher with 24/7 answering)</span>
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
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
                variants={fadeInUp}
                initial="hidden"
                animate={calculatorInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Your Potential Revenue
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-medium text-sm mb-2">
                      Total New Customers
                    </label>
                    <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                      <span className="text-2xl md:text-3xl font-bold">{totalNewCustomers.toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium text-sm mb-2">
                      Monthly Revenue Potential
                    </label>
                    <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                      <span className="text-lg md:text-xl font-semibold">{formatCurrency(monthlyRevenuePotential)}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium text-sm mb-2">
                      Gross Monthly Profit
                    </label>
                    <div className="bg-gray-100 text-gray-900 px-4 py-4 rounded-lg border border-gray-200 shadow-sm">
                      <span className="text-lg md:text-xl font-semibold">{formatCurrency(grossMonthlyProfit)}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium text-sm mb-2">
                      Monthly Investment (AI Receptionist)
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
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 px-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Want to schedule a time to talk?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
              </p>
              <a 
                href="/contact"
                onClick={() => sessionStorage.setItem('scrollToBooking', 'true')}
              >
                <button className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Book A Call
                </button>
              </a>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl relative">
                <Phone className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


