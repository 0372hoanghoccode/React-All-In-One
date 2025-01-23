function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return <Welcome name="Hoàng" />;
}

export default App;


// const App = () => {
//     return (
//         <User
//             name="Huy Hoàng"
//             age={18}
//             isMarried={false}
//             hobbies={["Coding", "Cooking", "Sleeping"]}
//         />
//     );
// };

// const User = (props) => {
//     return (
//         <section>
//             <h1>Name: {props.name}</h1>
//             <h2>Age: {props.age}</h2>
//             <h3>Is married: {props.isMarried}</h3>
//             <h4>Hobbies: {props.hobbies} </h4>
//         </section>
//     );
// };

// export default App;