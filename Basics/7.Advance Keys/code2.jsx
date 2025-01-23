const items = ["Apple", "Banana", "Cherry"];

function App() {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default App;

//Giải thích: Dùng map để tạo ra các phần tử từ mảng và sử dụng key để giúp React nhận diện các phần tử.