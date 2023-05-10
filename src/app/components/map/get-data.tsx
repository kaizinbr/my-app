import React from 'react'
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch('https://my-api-beige.vercel.app/api/main')
    const json = await res.json()
    // console.log(json)
    return {
        "books": json
    }
}

export default async function Books() {
    const books = await getStaticProps()

    return ({books})
}
