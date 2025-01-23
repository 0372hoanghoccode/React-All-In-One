function Header() {
    return <h1>Header Section</h1>;
}

function Footer() {
    return <footer>Footer Section</footer>;
}

function App() {
    return (
        <div>
            <Header />
            <p>Main Content</p>
            <Footer />
        </div>
    );
}

export default App;
//Giải thích: Chia giao diện thành các component nhỏ để dễ quản lý và tái sử dụng.