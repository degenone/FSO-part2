const Search = (props) => {
    const { value, handler } = props;
    return (
        <div className='searchContainer'>
            <label htmlFor='search'>Search for a country:</label>
            <input
                type='text'
                name='search'
                id='search'
                value={value}
                onChange={(e) => handler(e.target.value)}
            />
        </div>
    );
};

export default Search;
