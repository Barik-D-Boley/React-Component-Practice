import Post from './blogPost/BlogPost';
import data from './blogPost/data';

function App() {
    return (
        <>
            {data.map((person) => {
                return <Post data={person} key={person.id} />
            })}
        </>
    );
}

export default App;