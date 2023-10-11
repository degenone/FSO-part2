const Results = (props) => {
    const { results, handler } = props;
    if (results.length > 10) {
        return <p>Too many matches for this search. Please specify more.</p>;
    }
    if (results.length === 0) {
        return <p>No matches for this search.</p>;
    }
    return (
        <ul>
            {results.map((country) => (
                <li key={country}>
                    {country}{' '}
                    <button type='button' onClick={() => handler(country)}>
                        show
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Results;
