import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './nav-links';

export default function Navbar() {
    return (
        <header className="mt-5 content-center text-center">
            <div className=" text-3xl">
                <Link href="/">
                    <h1>John Syslo</h1>
                </Link>
            </div>
            <nav className="flex flex-row justify-center items-center">
                <NavLinks />
            </nav>
        </header>
    );
};
