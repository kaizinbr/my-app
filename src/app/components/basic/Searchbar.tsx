export default function Searchbar() {
    return (
        <div className={`w-full h-16 flex justify-center items-center
            
            text-white
        `}>
            <div className={`w-full max-w-4xl h-16 flex justify-between items-center
                px-16
            `}>
                <div className={`w-full h-16 flex justify-between items-center
                    max-w-4xl
                `}>
                    <input type="text" className={`w-full h-10 px-5 rounded-lg`} placeholder="Search" />
                    <button className={`w-16 h-10 bg-blue-500 rounded-lg`}>Search</button>
                </div>
            </div>
        </div>
    )
}