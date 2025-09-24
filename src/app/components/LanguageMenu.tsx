'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { useTranslations } from 'next-intl';

const languages = [
  { code: 'en-US', name: 'English' },
  { code: 'pt-BR', name: 'Português (BR)' }
];

export default function LanguageMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const onSelectLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}${pathname}`);
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3V3a1 1 0 112 0v1h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h2V3a1 1 0 011-1zm3 4V3H7v3h3zm2 0V3h2v3h-2zm4 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1v-1z" clipRule="evenodd" />
        </svg>
        <span>{t('language')}</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectLanguage(lang.code)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
