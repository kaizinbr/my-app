import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'] })

export default function Header() {
    return (
        <header className={fraunces.className + ' ' + 'header'}>
            <nav>
                <h1>Logo</h1>
                <ul>    
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav> 
        </header>
    )
}