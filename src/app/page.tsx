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
        <div className={`
            py-9 gap-7 flex flex-col justify-center items-center    
        `}>
            <h1 className={`
                text-3xl font-bold
            `}>Períodos</h1>
            <div className={`
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1
                gap-6
                w-full max-w-4xl
            `}>
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Primeiro período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
                
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Segundo período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
                
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Terceiro período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
                
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Quarto período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
                
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Quinto período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
                
                <Link href={'/primeiro'} className={`
                    bg-neutral-100 rounded-lg border border-slate-300 px-5 py-3
                    transition duration-200 ease-in-out hover:bg-slate-100 hover:border-blue-500
                `}>
                    <h2 className={`
                        text-xl 
                    `}>Sexto período</h2>
                    <span className={`
                        text-gray-500
                    `}>5 livros</span>
                </Link>
            </div>
        </div>
    )
}
