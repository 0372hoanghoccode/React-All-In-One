const App = () => {
    return (
        <User
            name="HuXn WebDev"
            age={18}
            isMarried={false}
            hobbies={["Coding", "Cooking", "Sleeping"]}
        />
    );
};

const User = ({ name, age, isMarried, hobbies }) => {
    return (
        <section>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Is married: {isMarried}</h3>
            <h4>Hobbies: {hobbies} </h4>
        </section>
    );
};

export default App;