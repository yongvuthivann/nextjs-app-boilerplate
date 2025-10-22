import LangToggle from './lang-toggle';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b-[0.5px] bg-white py-3 dark:bg-[#020817]">
      <h1 className="font-bold">Nextjs App Boilerplate</h1>
      <div className="flex items-center space-x-4">
        <LangToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
