async function construcsCards() {
    
}

export default function Card(book: any) {
    // console.log(book)
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{book.book.title}1</h3>
                <div className="card-options">
                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                </div>
            </div>
            <div className="card-body">
                {/* {book.children} */}
            </div>
        </div>
    )
}