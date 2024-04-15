import React from 'react';
import { ModeToggle } from './mode-toggle';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="my-5 flex items-center justify-between md:my-10">
        <p className="text-center text-xs">2024, Developed by Vuthivann Yong</p>
        <ModeToggle />
      </div>
    </footer>
  );
}
