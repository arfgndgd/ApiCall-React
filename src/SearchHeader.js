function SearchHeader({search}) {

    const handelFormSubmit = (event) => {
        event.preventDefault(); //engellemek => gönderdiğin özelliğin default özelliğini engelle
        search('can');
    }

    return (
        <div className="searchDiv">
            <form onSubmit={handelFormSubmit}>
                <label>Ne Arıyorsunuz?</label>
                <input />
            </form>
        </div>
    )
    
}

export default SearchHeader;