import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

export default function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Languages className="h-5 w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Khmer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
