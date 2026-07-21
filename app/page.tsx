'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  // مصفوفة الصور الحقيقية الخاصة بالمصنع
  const images = [
    "/pip4.jpg", // صورة بوابة المصنع واليافطة
    "/factory1.png",    // صورة صالة الإنتاج الداخلي والمواسير
    "/pip5.jpg"    // صورة لفيّات الأنابيب الملونة
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
          
         {/* Logo & Company Title */}
<div className="flex items-center space-x-3 rtl:space-x-reverse">
  <div className="h-12 w-auto flex items-center">
    <img 
      src="/1.png" 
      alt="Electroplast Logo" 
      className="h-full w-auto object-contain"
    />
  </div>
  
  <div className="flex flex-col">
    <h3 className="text-lg font-bold text-blue-950 leading-snug">
      شركة فيصل الشرباتي وشركاه
    </h3>
    <span className="text-xs font-semibold text-blue-900 tracking-wider">
      Fisal AL-Sharbati & Partners Co.
    </span>
    <span className="text-[10px] text-blue-600 font-medium uppercase tracking-tight">
      Electrical plastic industries
    </span>
  </div>
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
                src="/factory1.png" 
                alt="Faisal Al-Sharbati Factory" 
                className="w-full h-[380px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

     <footer className="bg-slate-900 text-slate-300 py-12 px-6 border-t border-slate-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* معلومات الشركة */}
    <div>
      <h3 className="text-xl font-bold text-white mb-2">
        شركة فيصل الشرباتي وشركاه
      </h3>
      <p className="text-sm text-slate-400 font-medium mb-1">
        Fisal AL-Sharbati & Partners Co.
      </p>
      <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
        Electrical plastic industries
      </p>
    </div>

    {/* العنوان */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">Location</h4>
      <p className="text-sm leading-relaxed text-slate-300">
       Abu Alanda Al Hizam Al Daeri St. Complex No 8, Amman - Jordan <br />
      </p>
      
    </div>

    {/* تفاصيل الاتصال */}
    <div>
      <h4 className="text-lg font-semibold text-white mb-3"> Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>
         <span className="text-slate-400">phone: </span>

          <a href="tel:0096264165296" className="hover:text-blue-400 transition-colors dir-ltr inline-block">
            00962 6 4165296
          </a>
        </li>
        <li>
          <span className="text-slate-400">FAX:</span>
          <span className="dir-ltr inline-block">00962 6 4163283</span>
        </li>
        <li>
          <span className="text-slate-400">Mail:</span>
          <a href="mailto:alburaqfactoryad@gmail.com" className="hover:text-blue-400 transition-colors">
            alburaqfactoryad@gmail.com
          </a>
        </li>
      </ul>
    </div>

  </div>
  
  <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
    © {new Date().getFullYear()} Fisal AL-Sharbati & Partners Co. All rights reserved.
  </div>
</footer>

    </div>
  );
}