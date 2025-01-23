// const username = "Hoàng";

//  const App = () => <h1>Welcome, {username}!</h1>;

//  export default App;

//example2
const App1 = () => {
    // Khai báo biến và hàm
    const name = "Hoàng"; // Biến lưu tên
    const multiply = (a, b) => a * b; // Hàm nhân hai số
    const specialClass = "simple-class"; // Biến lưu tên lớp CSS

    return (
        <section>
            {/* Hiển thị biểu thức */}
            <p>2 + 2 = {2 + 2}</p> {/* Kết quả sẽ là 4 */}

            {/* Hiển thị giá trị của biến */}
            <h1>{name}</h1> {/* Hiển thị "Hoàng" */}

            {/* Hiển thị mảng */}
            <p>Friends List: {["Alex", "John", "Waheed", "Jordan"].join(", ")}</p>
            {/* Kết quả: "Alex, John, Waheed, Jordan" */}

            {/* Hiển thị kết quả của hàm */}
            <p>2 * 2 = {multiply(2, 2)}</p> {/* Kết quả sẽ là 4 */}

            {/* Hiển thị lớp CSS từ biến */}
            <p className={specialClass}>This is special class</p>
            {/* Thẻ <p> sẽ có class là "simple-class" */}
        </section>
    );
};

export default App1;