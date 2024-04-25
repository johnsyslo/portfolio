'use client';

import { LuSun, LuMoon } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === 'dark') {
    return (
      <LuSun className="mx-3 text-xl hover:text-violet-600" onClick={() => setTheme('light')} />
    );
  }

  if (theme === 'light') {
    return (
      <LuMoon className="mx-3 text-xl hover:text-violet-600" onClick={() => setTheme('dark')} />
    );
  }
  return null;
}
