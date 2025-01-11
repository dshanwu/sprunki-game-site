import { useState } from 'react';

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // 关闭下拉菜单
    // 其他逻辑，如更新页面内容
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 shadow-sm border border-gray-100 hover:border-fuchsia-200 hover:bg-gradient-to-br hover:from-fuchsia-50 hover:to-pink-50 transition-all duration-300"
      >
        <span className="text-sm text-gray-600">{language === 'en' ? 'English' : '中文'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 transform transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg border border-gray-100 py-2 z-[1001]">
          <button
            onClick={() => changeLanguage('en')}
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-50 w-full text-left"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('zh')}
            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-pink-50 w-full text-left"
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
}