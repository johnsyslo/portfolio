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
                        'flex h-[40px] items-center grow rounded-md p-3 mx-3 text-md font-medium hover:text-indigo-600' /*className="hidden md:block' */
                    )}
                >
                    <p /*className="hidden md:block" */>{link.name}</p>
                </Link>
            )
        }) )}
    </>
  )
}