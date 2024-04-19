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
                        'text-md px-3 hover:text-indigo-600'
                    )}
                >
                    <p>{link.name}</p>
                </Link>
            )
        }) )}
    </>
  )
}