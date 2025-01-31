import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='my-10 flex justify-between gap-5'>
        <Link href="/">Home</Link>
    </header>
  )
}
