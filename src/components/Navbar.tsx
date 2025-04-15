"use client";

import {useState, useEffect} from 'react';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[(-moz-appearance:none)]:bg-background/60 border-b">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center space-x-2">
          <span className="font-bold">Web3 Devfolio</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            {mounted && (
              <span onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
            )}
          </Button>
          <Button variant="outline" size="sm">
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};
