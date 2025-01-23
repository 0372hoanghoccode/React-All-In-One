// Sử dụng arrow function để định nghĩa component Card
const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

// Sử dụng arrow function để định nghĩa component App
const App = () => {
    return (
        <Card>
            <h2>This is a card</h2>
            <p>Card content goes here.</p>
        </Card>
    );
};

export default App;