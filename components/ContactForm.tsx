'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactFormProps {
  variant?: 'light' | 'dark';
}

export default function ContactForm({ variant = 'light' }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const submitForm = async (formData: FormData) => {
    try {
      setIsLoading(true);
      
      const templateParams = {
        to_name: 'Digital Lift',
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'service_sswkev6',
        'template_vpbk2x2',
        templateParams,
        'hYbjDz-pUlQEBgZoa'
      );

      setIsSubmitted(true);
      reset();
    } catch (error: any) {
      console.error('Error sending email:', error);
      
      let errorMessage = 'There was an error sending your message. Please try again.';
      
      if (error?.text?.includes('Gmail_API') || error?.text?.includes('Invalid grant')) {
        errorMessage = 'Email service configuration error. Please reconnect your Gmail account in EmailJS dashboard.';
      } else if (error?.status === 412) {
        errorMessage = 'Email service needs to be reconfigured. Please reconnect your Gmail account.';
      }
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const isDark = variant === 'dark';

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-center p-8 md:p-12 rounded-xl border ${
          isDark
            ? 'bg-emerald-900/20 border-emerald-500/30'
            : 'bg-blue-50 border-blue-200'
        }`}
      >
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
          isDark ? 'text-emerald-400' : 'text-blue-600'
        }`}>
          Thank You for Reaching Out!
        </h3>
        <p className={`text-base md:text-lg leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          We've received your message and will contact you shortly to discuss how we can help transform your digital presence.
        </p>
      </motion.div>
    );
  }

  const inputBaseClasses = isDark
    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-600 focus:border-blue-600';

  const labelClasses = isDark
    ? 'text-gray-200'
    : 'text-gray-700';

  const errorTextClasses = isDark
    ? 'text-red-400'
    : 'text-red-500';

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      <div>
        <input
          {...register('name', { required: 'Name is required.' })}
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          disabled={isLoading}
          className={`w-full px-4 py-3 border rounded-lg transition-all ${inputBaseClasses} ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && (
          <p className={`mt-1 text-sm ${errorTextClasses}`}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          disabled={isLoading}
          className={`w-full px-4 py-3 border rounded-lg transition-all ${inputBaseClasses} ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <p className={`mt-1 text-sm ${errorTextClasses}`}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          name="phone"
          placeholder="(Optional) +088-234-6849"
          disabled={isLoading}
          className={`w-full px-4 py-3 border rounded-lg transition-all ${inputBaseClasses}`}
        />
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Message is required.' })}
          id="message"
          name="message"
          rows={6}
          placeholder="Write your message here..."
          disabled={isLoading}
          className={`w-full px-4 py-3 border rounded-lg transition-all resize-none ${inputBaseClasses} ${
            errors.message ? 'border-red-500' : ''
          }`}
        />
        {errors.message && (
          <p className={`mt-1 text-sm ${errorTextClasses}`}>{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
          isDark
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        } ${
          isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
        {!isLoading && <ArrowRight className="w-5 h-5" />}
      </button>
    </form>
  );
}

