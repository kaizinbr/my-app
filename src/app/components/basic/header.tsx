

export default function Header() {
    return (
        <header className={`
            bg-slate-900/50 w-full h-16 flex justify-center items-center text-slate-100
            px-16
            backdrop-filter backdrop-blur-lg
            fixed top-0 left-0
        `}>
            <nav className={`w-full h-16 flex justify-between items-center max-w-4xl
        `}>
                <h1 className={`
                    text-2xl font-bold
                `}>Logo</h1>
                <ul className={`h-16 flex items-center justify-around gap-5
        `}>    
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav> 
        </header>
    )
}