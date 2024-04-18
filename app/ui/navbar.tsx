import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png'
import NavLinks from './nav-links';

export default function Navbar() {
    return (
        <header className="h-20">
            <div className="flex justify-center items-center text-3xl  py-4 2xl:px-16">
                <Link href="/">
                    <h1>John Syslo</h1>
                </Link>
            </div>
            <nav className="flex justify-center">
                <div className="flex items-center px-4 2xl:px-16">
                    <NavLinks />
                </div>
            </nav>
        </header>
    );
};
