import { useTranslations } from 'next-intl';
import React from 'react';

export default function Main() {
  const t = useTranslations('Index');
  return (
    <div>
      <p>{t('title')}</p>
    </div>
  );
}
