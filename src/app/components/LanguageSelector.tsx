'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}${pathname}`);
    });
  };

  return (
    <select 
      onChange={(e) => onSelectChange(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="en-US">English</option>
      <option value="pt-BR">Português (BR)</option>
    </select>
  );
}
