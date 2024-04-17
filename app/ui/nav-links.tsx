'use client';
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
]

export default function NavLinks() {
  return (
    <>
        {links.map((link => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[40px] items-center grow rounded-md p-3 mx-3 text-sm font-medium hover:bg-indigo-200 hover:text-indigo-600'
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        }) )}
    </>
  )
}