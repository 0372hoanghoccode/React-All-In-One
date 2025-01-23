// điều kiện if

// Component hiển thị khi mật khẩu hợp lệ
const ValidPassword = () => <h1>Valid Password</h1>;

// Component hiển thị khi mật khẩu không hợp lệ
const InvalidPassword = () => <h1>Invalid Password</h1>;

// Component Password nhận prop `isValid` để quyết định hiển thị component nào
const Password = ({ isValid }) => {
    if (isValid) {
        return <ValidPassword />;
    }
    return <InvalidPassword />;
};

// Component App sử dụng Password với prop `isValid` là true
const App = () => {
    return (
        <section>
            <Password isValid={true} />
        </section>
    );
};

// export default App;

// điều kiện và

// Component Cart hiển thị danh sách sản phẩm trong giỏ hàng
function Cart() {
    const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];

    return (
        <>
            <h1>Cart 🛒</h1>
            {/* Nếu có sản phẩm trong giỏ hàng, hiển thị số lượng sản phẩm */}
            {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

            <ul>
                <h4> 👇Products </h4>
                {/* Hiển thị danh sách sản phẩm */}
                {items.map((item) => (
                    <li key={Math.random()}>{item}</li>
                ))}
            </ul>
        </>
    );
}

// Component App sử dụng Cart
const App1 = () => <Cart />;

// export default App1;

//toán tử ba ngôi
// Component hiển thị khi mật khẩu hợp lệ
const ValidPassword1 = () => <h1>Valid Password</h1>;

// Component hiển thị khi mật khẩu không hợp lệ
const InvalidPassword1 = () => <h1>Invalid Password</h1>;

// Component Password sử dụng toán tử ba ngôi để quyết định hiển thị component nào
const Password1 = ({ isValid }) =>
    isValid ? <ValidPassword1 /> : <InvalidPassword1 />;

// Component App sử dụng Password với prop `isValid` là true
const App2 = () => {
    return (
        <section>
            <Password1 isValid={true} />
        </section>
    );
};

export default App2;