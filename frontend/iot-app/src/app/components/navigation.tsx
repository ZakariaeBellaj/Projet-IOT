"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navigation() {
    const pathname = usePathname();
  return (
    <nav className="bg-blue-800 p-4 text-center">
        <Link href="/" 
        className={pathname === '/' ? ' mr-10 font-bold text-black' : 'mr-10 text-blue-200'}>
        Home
        </Link>
        
        <Link href="/login" className={pathname === '/login' ? 'mr-4 font-bold text-black' : 'mr-4 text-blue-200'}>
        Sign in
        </Link>
        
    </nav>
  )
}
