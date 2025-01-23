const items = [1, 2, 3];

function App() {
    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default App;

//Giải thích: Dùng key giúp React nhận diện và tối ưu hóa việc render lại các phần tử khi dữ liệu thay đổi.
//Khi không có key, React sẽ render lại toàn bộ các phần tử trong danh sách, dẫn đến hiệu suất giảm.