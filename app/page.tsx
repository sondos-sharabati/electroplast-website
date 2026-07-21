'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  // مصفوفة الصور الحقيقية الخاصة بالمصنع
  const images = [
    "/factory.jpg", // صورة بوابة المصنع واليافطة
    "/pip3.jpg",    // صورة صالة الإنتاج الداخلي والمواسير
    "/pipe1.jpg"    // صورة لفيّات الأنابيب الملونة
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // تبديل الصور تلقائياً كل 4 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans ltr scroll-smooth" dir="ltr">
      
      {/* 1. Header Container - Vatrenas Style */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        {/* Top Section: Logo & Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-auto flex items-center">
              <img 
                src="/1.png" 
                alt="Electroplast Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-2xl font-black text-blue-950 tracking-wider">
               Faisal Al-Sharbati & Partners
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-bold">
            <a href="#home" className="text-sky-500 hover:text-sky-600 transition">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-sky-500 transition">
              About Us
            </a>
            <a href="#contact" className="text-gray-800 hover:text-sky-500 transition">
              Contact Us 
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100"></div>
      </header>

     {/* 2. Hero Section - Natural Image Aspect Ratio (Full Uncropped Image) */}
      <section id="home" className="relative bg-slate-950 text-white w-full overflow-hidden flex items-center justify-center">
        
        {/* الصورة الأساسية المسؤولة عن أبعاد السلايدر بدون قص */}
        <div className="w-full relative">
          <img 
            src={images[currentImage]} 
            alt="Factory Slide" 
            className="w-full h-auto max-h-[85vh] object-contain mx-auto block transition-all duration-700"
          />
        </div>

        {/* طبقة التغشية الداكنة للنصوص */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* النص والنقاط فوق الصورة مباشرة */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">

          {/* Slider Indicators */}
          <div className="flex justify-center items-center space-x-2 pt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentImage ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* 3. About Us Section */}
      <section id="about" className="py-20 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-blue-50 text-blue-900 font-bold px-4 py-1.5 rounded-full text-sm">
                ABOUT US
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base">
                Faisal Al-Sharbati & Partners Company (Electroplast) is a leading manufacturer of electrical conduit systems and plastic electrical piping solutions. We are committed to delivering products that combine superior quality, durability, and reliable performance. By utilizing advanced manufacturing technologies and rigorous quality standards, we provide safe and efficient solutions for residential, commercial, and industrial electrical installations, ensuring long-term protection and dependable performance.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="/pip3.jpg" 
                alt="Faisal Al-Sharbati Factory" 
                className="w-full h-[380px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Contact Information Section (مطابق للتصميم المرفق بالصورة) */}
      <section id="contact" className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Title & Subtitle */}
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Contact Information
            </h2>
            <p className="text-gray-500 text-base">
              Let's talk about how we can help you?
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* 1. E-mail Address */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sky-500">
                <svg className="w-16 h-16 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700">E-mail Address</h3>
              <a href="mailto:electroplastjo@gmail.com" className="text-gray-500 hover:text-sky-500 transition text-base">
                electroplastjo@gmail.com
              </a>
            </div>

            {/* 2. Phone Number */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sky-500">
                <svg className="w-16 h-16 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700">Phone Number</h3>
              <div className="flex flex-col space-y-1 text-sky-500 font-semibold text-lg">
                <a href="tel:+962799595236" className="hover:underline">
                  +962799595236
                </a>
               
              </div>
            </div>

            {/* 3. Address */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sky-500">
                <svg className="w-16 h-16 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700">Address</h3>
              <p className="text-gray-500 text-base">
                Jordan - Amman
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-6 text-sm border-t border-blue-900">
        <p>© {new Date().getFullYear()} ELECTROPLAST - FAISAL AL-SHARBATI & PARTNERS. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}