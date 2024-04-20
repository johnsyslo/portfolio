import Link from 'next/link';
import NavLinks from '@/components/nav-links';

export default function Navbar() {
  return (
    <div className="my-5 content-center text-center">
      <div className="text-3xl font-bold hover:text-violet-600">
        <Link href="/">
          <h1>John Syslo</h1>
        </Link>
      </div>
      <nav className="flex flex-row items-center justify-center">
        <NavLinks />
      </nav>
    </div>
  );
}
