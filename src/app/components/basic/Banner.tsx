import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'] })

export default function Banner() {
    return (
        <div className={`
            w-full h-96 flex flex-col justify-center items-center
            bg-gradient-to-r from-blue-500 to-blue-800
            from-slate-900/50 to-slate-900/50
            text-white
        `}>
            <h1 className={`text-4xl font-bold max-w-[70%] text-center`}>
                <span className={fraunces.className + ' ' + 'header' + `
                    text-4xl
                `}>Bibliografia de Sistemas para Internet</span> <br />
                {/* <span className={`text-5xl`}>Next.js</span> <br />
                <span className={`text-5xl`}>Blog</span> */}
            </h1>
            <h2 className={`text-xl mt-4`}>
                Acesse aos livros da bibliografia de Sitemas para Internet gratuitamente
            </h2>
        </div>
    )
}