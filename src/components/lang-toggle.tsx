'use client';

import React from 'react';
import { Languages } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function LangToggle() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Languages className="h-5 w-5 cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.replace(`/en`)}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.replace('/kh')}>
          Khmer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
