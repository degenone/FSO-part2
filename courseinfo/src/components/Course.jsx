const Total = (props) => {
    const { course } = props;
    const total = course.parts.reduce(
        (acc, part) => (acc += part.exercises),
        0
    );
    return <strong>Number of exercises {total}</strong>;
};

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
            <Total course={course} />
        </div>
    );
};

export default Course;
