'use client';

// import { LuSun, LuMoon } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <span className="m-5"></span>
  );

  if (theme === 'dark') {
    return (
      <p className="mx-3 text-xl hover:text-violet-600" onClick={() => setTheme('light')}>Light</p>
    );
  }

  if (theme === 'light') {
    return (
      <p className="mx-3 text-xl hover:text-violet-600" onClick={() => setTheme('dark')}>Dark</p>
    );
  }
  return null;
}
