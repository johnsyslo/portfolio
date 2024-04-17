import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png'
import NavLinks from './nav-links';

const links = [
    {

    }
]
export default function Navbar() {
    return (
        <main>
            <nav className="flex justify-center h-20 bg-white dark:bg-neutral-900">
                <div className="flex items-center py-4 2xl:px-16">
                    <Link href="/">
                        John Syslo
                    </Link>
                </div>
                <div className="flex items-center h-full px-4 2xl:px-16">
                    <NavLinks />
                </div>
            </nav>
        </main>
    );
};
