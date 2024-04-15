import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Github } from 'lucide-react';

import { Button } from './ui/button';

export default function Banner() {
  const t = useTranslations();
  return (
    <div className="mx-auto mt-20 flex max-w-2xl flex-col lg:mt-36">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
        {t('page.home.welcome')}
      </h1>

      <p className="mt-2 text-center text-sm md:text-base">
        Accelerate your Next.js application with streamlined setup featuring
        efficient app router with buit-in up to date libraries and packages.
      </p>

      <div className="mt-5 flex justify-center space-x-5">
        <Link href="https://github.com/yongvuthivann/nextjs-app-boilerplate">
          <Button className="text-xs sm:text-sm">Get Started</Button>
        </Link>
        <Link href="https://github.com/yongvuthivann/nextjs-app-boilerplate">
          <Button variant="secondary" className="text-xs sm:text-sm">
            <Github className="mr-2 h-5 w-5" />
            Star on Github
          </Button>
        </Link>
      </div>
    </div>
  );
}
