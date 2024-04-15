import React from 'react';

import LangToggle from './lang-toggle';

export default function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between border-b-[0.5px] py-3">
      <h1 className="font-bold">Nextjs App Boilerplate</h1>
      <LangToggle />
    </div>
  );
}
