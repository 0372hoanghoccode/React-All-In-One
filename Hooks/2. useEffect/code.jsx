import { useEffect, useState } from "react";

const App = () => {
    // 1. useEffect KHÔNG có dependency array - Chạy sau MỖI lần render
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("🏃‍♂️ Chạy sau mọi lần render");
        document.title = `Đếm: ${count}`;
    });

    // 2. useEffect CÓ dependency array - Chạy khi `value` thay đổi
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log("🔔 Value thay đổi:", value);
    }, [value]);

    // 3. useEffect với CLEANUP FUNCTION - Dọn dẹp event listener
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            console.log("🧹 Dọn dẹp trước khi component unmount/re-render");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 4. Fetch DATA với useEffect - Lấy dữ liệu từ API
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data.slice(0, 5)); // Lấy 5 post đầu
            } catch (error) {
                console.error("🚨 Lỗi fetch data:", error);
            }
        };
        fetchData();
    }, []); // Chỉ chạy 1 lần sau mount

    return (
        <div style={{ padding: 20 }}>
            {/* Phần 1: Counter */}
            <div>
                <h2>Đếm: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Tăng</button>
            </div>

            {/* Phần 2: Input */}
            <div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Gõ gì đó..."
                />
            </div>

            {/* Phần 3: Window width */}
            <div>
                <h2>Chiều rộng cửa sổ: {windowWidth}px</h2>
            </div>

            {/* Phần 4: Hiển thị posts */}
            <div>
                <h2>Bài viết từ API:</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;



