const Results = (props) => {
    const { results } = props;
    if (results.length > 10) {
        return <p>Too many matches for this search. Please specify more.</p>;
    }
    if (results.length === 0) {
        return <p>No matches for this search.</p>;
    }
    return (
        <ul>
            {results.map((c) => (
                <li key={c}>{c}</li>
            ))}
        </ul>
    );
};

export default Results;
