import React from 'react'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>teste</h1>
            <Link href='/books/1.pdf'>
                sownload
            </Link>
        </div>
    )
}
