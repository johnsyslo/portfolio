'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Programming', href: '/programming' },
  { name: 'GitHub', href: 'https://github.com/johnsyslo/' },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('rounded-full px-3 text-lg hover:bg-violet-300 hover:text-violet-600')}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
