const Part = (props) => {
    const { part } = props;
    return (
        <p>
            {part.name} &mdash; {part.exercises}
        </p>
    );
};


const Content = (props) => {
    const { course } = props;
    return (
        <>
            {course.parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </>
    );
};

const Header = (props) => {
    const { course } = props;
    return <h1>{course.name}</h1>;
};

const Course = (props) => {
    const { course } = props;
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    );
};

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2,
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;
