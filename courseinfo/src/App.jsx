import Course from './components/Course';

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
        {
            name: 'TypeScript',
            id: 3,
            parts: [
                {
                    name: 'TypeScript vs JavaScript',
                    exercises: 2,
                    id: 1,
                },
                {
                    name: 'The Basics',
                    exercises: 4,
                    id: 2,
                },
                {
                    name: 'Everyday Types',
                    exercises: 6,
                    id: 3,
                },
                {
                    name: 'Narrowing',
                    exercises: 3,
                    id: 4,
                },
            ],
        },
        {
            name: 'SQL',
            id: 4,
            parts: [
                {
                    name: 'Create Table',
                    exercises: 1,
                    id: 1,
                },
                {
                    name: 'CRUD operations',
                    exercises: 4,
                    id: 2,
                },
                {
                    name: 'Stored procedures',
                    exercises: 5,
                    id: 3,
                },
            ],
        },
    ];

    return (
        <>
            {courses.map((course) => (
                <Course key={course.id} course={course} />
            ))}
        </>
    );
};

export default App;
