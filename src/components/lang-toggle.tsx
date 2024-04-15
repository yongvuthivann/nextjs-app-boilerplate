'use client';

import React from 'react';
import { Languages } from 'lucide-react';
import { usePathname, useRouter } from '../../navigation.mjs';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';

export default function LangToggle() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Languages className="h-5 w-5 cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.replace(pathname, { locale: 'en' })}
          className={`${locale === 'en' ? 'bg-slate-200 dark:bg-slate-400' : ''}`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace(pathname, { locale: 'kh' })}
          className={`${locale === 'kh' ? 'bg-slate-200 dark:bg-slate-400' : ''}`}
        >
          Khmer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
