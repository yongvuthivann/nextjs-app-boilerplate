import dayjs from 'dayjs';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = dayjs().format('YYYY');
  return (
    <footer className="mt-auto">
      <div className="my-5 flex items-center justify-between md:my-10">
        <p className="text-center text-xs">
          {currentYear}, Developed by Vuthivann Yong
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/yongvuthivann" target="__blank">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/vuthivann" target="__blank">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
