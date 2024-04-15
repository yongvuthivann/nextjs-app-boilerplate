import { useTranslations } from 'next-intl';

import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <ModeToggle />
      <h1>{t('title')}</h1>
    </main>
  );
}
