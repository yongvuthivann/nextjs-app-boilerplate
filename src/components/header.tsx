import React from 'react';

import { ModeToggle } from './mode-toggle';
import LangToggle from './lang-toggle';

export default function Header() {
  return (
    <div className="flex items-center justify-between py-3">
      <h1 className="font-bold">Nextjs App Boilerplate</h1>
      <div className="flex items-center space-x-4">
        <LangToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
