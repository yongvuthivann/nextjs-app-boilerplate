'use client';

import React from 'react';
import { Languages } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from 'next/navigation';

export default function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Languages className="h-5 w-5 cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.replace(`/en`)}
          className={`${currentLocale === 'en' ? 'bg-slate-200 dark:bg-slate-400' : ''}`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace('/kh')}
          className={`${currentLocale === 'kh' ? 'bg-slate-200 dark:bg-slate-400' : ''}`}
        >
          Khmer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
