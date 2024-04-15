'use client';

import * as React from 'react';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex space-x-2 rounded-full border-[1px] p-1">
      <div
        className={`cursor-pointer rounded-[100%] p-1 ${theme === 'light' ? 'bg-slate-300 dark:bg-slate-500 ' : 'bg-transparent'}`}
        onClick={() => setTheme('light')}
      >
        <Sun className={`h-4 w-4`} />
      </div>
      <div
        className={`cursor-pointer rounded-[100%] p-1 ${theme === 'system' ? 'bg-slate-300 dark:bg-slate-500 ' : 'bg-transparent'}`}
        onClick={() => setTheme('system')}
      >
        <LaptopMinimal className={`h-4 w-4`} />
      </div>
      <div
        className={`cursor-pointer rounded-[100%] p-1 ${theme === 'dark' ? 'bg-slate-300 dark:bg-slate-500 ' : 'bg-transparent'}`}
        onClick={() => setTheme('dark')}
      >
        <Moon className={`h-4 w-4`} />
      </div>
    </div>
  );
}
