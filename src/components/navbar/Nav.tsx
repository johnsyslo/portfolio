import Link from 'next/link';
import NavLinks from '@/components/navbar/NavLinks';
import ThemeSwitch from '@/components/navbar/ThemeSwitcher';

export default function Navbar() {
  return (
    <>
      <div className="mt-[25px] text-center">
        <nav className="flex flex-row items-center justify-between">
          <div className="my-6 text-2xl font-bold text-[var(--accent)]">
            <Link href="/">
              <h1>js</h1>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <NavLinks />
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </>
  );
}
