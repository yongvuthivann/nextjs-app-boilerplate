'use strict';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'kh'];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
