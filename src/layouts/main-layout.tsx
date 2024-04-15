import { SVGBg } from '@/constants';
import React from 'react';

type props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: props) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4">
      <SVGBg />
      {children}
    </div>
  );
}
