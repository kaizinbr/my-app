import React from 'react'
import Link from 'next/link'
import Titulo from './components/map/titulo'
import { getStaticProps } from './components/map/get-data'
import Card from './components/basic/Card'
import Searchbar from './components/basic/Searchbar'

async function construcsCards() {
    const books = await getStaticProps()

    return (
        <div>
        {
            books.books.periodos.primeiro?.map((book: object) => (
                // console.log(book),
                <div>
                    {/* <p>O titulo é {book.title}</p> */}
                    <Card book={book} />
                </div>
            ))
        }
        </div>


    )
}

export default async function Home() {
    // const books = await getStaticProps()

    return (
        <div>
            <h1>teste</h1>
            <Link href='/books/1.pdf'>
                sownload
            </Link>
                {await construcsCards()}
            <div>


                {/* @ts-expect-error Server Component */}
                <Titulo />
            </div>
        </div>
    )
}
