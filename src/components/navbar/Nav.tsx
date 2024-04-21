import Link from 'next/link';
import NavLinks from '@/components/navbar/NavLinks';

export default function Navbar() {
  return (
    <div className="mt-[25px] content-center text-center">
      <div className="my-6 text-3xl font-bold hover:text-violet-600">
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
