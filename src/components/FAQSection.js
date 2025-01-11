// src/components/FAQSection.js
import React from 'react';
import { FAQ } from '../utils/constants'; // 确保路径正确

const FAQSection = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here, we've collected the most common questions from players, helping you quickly understand the gameplay and special features.
          </p>
        </div>

        {/* FAQ 网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQ.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/50 rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:border-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/20 overflow-hidden"
            >
              <h3 className="text-[15px] font-medium text-gray-700 group-hover:text-fuchsia-500 transition-colors duration-300 mb-2">
                {item.question}
              </h3>
              <p className="text-[14px] leading-relaxed text-gray-600 opacity-0 max-h-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;