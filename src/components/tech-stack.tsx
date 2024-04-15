import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { techStacks } from '@/constants';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import Link from 'next/link';

export default function TechStack() {
  return (
    <div className="mt-28">
      <h1 className="text-center text-xl font-semibold sm:text-2xl lg:text-3xl">
        Built-in features
      </h1>
      <div className="mt-5 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
        {techStacks.map((item, index) => (
          <Card key={index} className="transition duration-300 hover:scale-105">
            <Link href={item.link}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 px-6 py-4">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <ArrowUpRight className="h-5 w-5" />
              </CardHeader>
              <CardContent>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
