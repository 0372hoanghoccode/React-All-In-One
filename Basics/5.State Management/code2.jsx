import React, { useState } from "react";

// 1. Quản lý state cơ bản (Counter)
const CounterExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

// 2. Cập nhật mảng (Array)
const ArrayExample = () => {
    const [friends, setFriends] = useState(["Alex", "John"]);

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
            <button onClick={() => setFriends([...friends, "Hoàng"])}>Add Friend</button>
            <button onClick={() => setFriends(friends.filter((f) => f !== "John"))}>
                Remove John
            </button>
        </div>
    );
};

// 3. Cập nhật đối tượng (Object)
const ObjectExample = () => {
    const [movie, setMovie] = useState({ title: "Equalizer 3", ratings: 7 });

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <p>Ratings: {movie.ratings}</p>
            <button onClick={() => setMovie({ ...movie, ratings: 5 })}>
                Update Ratings
            </button>
        </div>
    );
};

// 4. Cập nhật mảng đối tượng (Array of Objects)
const ArrayOfObjectsExample = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Spider Man", ratings: 3 },
        { id: 2, title: "Superman", ratings: 6 },
    ]);

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} (Ratings: {movie.ratings})
                    </li>
                ))}
            </ul>
            <button
                onClick={() =>
                    setMovies(
                        movies.map((m) =>
                            m.id === 1 ? { ...m, title: "John Wick 4" } : m
                        )
                    )
                }
            >
                Update Spider Man
            </button>
        </div>
    );
};

// 5. Chia sẻ state giữa các component
const ComponentOne = ({ count, onClickHandler }) => {
    return (
        <div>
            <h2>Component One</h2>
            <p>Count: {count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </div>
    );
};

const ComponentTwo = ({ count, onClickHandler }) => {
    return (
        <div>
            <h2>Component Two</h2>
            <p>Count: {count}</p>
            <button onClick={onClickHandler}>Increment</button>
        </div>
    );
};

const SharingStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Sharing State</h2>
            <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
            <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
        </div>
    );
};

// App chính
const App = () => {
    return (
        <div>
            <h1>React useState Examples</h1>
            <CounterExample />
            <hr />
            <ArrayExample />
            <hr />
            <ObjectExample />
            <hr />
            <ArrayOfObjectsExample />
            <hr />
            <SharingStateExample />
        </div>
    );
};

export default App;