// 1. Trả về một phần tử gốc duy nhất
// Để trả về nhiều phần tử từ một component, bạn cần bọc chúng trong một thẻ cha duy nhất.

// LỖI
// const App = () => {
//     return (
//         <section id="section">
//         </section>
//           <h1>Welcome To React</h1>
//       );
// }

// Sửa lại:
const App = () => {
    return (
        <section id="section">
            <h1>Welcome To React</h1>
        </section>
    );
};

// 2. Đóng tất cả các thẻ
// JSX yêu cầu các thẻ phải được đóng rõ ràng: các thẻ tự đóng như <img> phải trở thành <img />, và các thẻ bao bọc như <li>oranges phải được viết thành <li>oranges</li>.

// LỖI
// const App = () => {
//     return (
//         <section id="section">
//           <img >
//         </section>
//       );
// }

// Sửa lại:
const App2 = () => {
    return (
        <section id="section">
            <img src="image.jpg" alt="Description" />
        </section>
    );
};

// 3. Sử dụng className thay vì class
// Trong JSX, bạn phải sử dụng `className` thay vì `class` để định nghĩa các lớp CSS.

// LỖI
// const App = () => {
//   return (
//     <section class="section">
//       <h1 class="title">Hello HuXn</h1>
//     </section>
//   );
// };

// Sửa lại:
const App3 = () => {
    return (
        <section className="section">
            <h1 className="title">Hello HuXn</h1>
        </section>
    );
};

// 4. Sử dụng htmlFor thay vì for
// Trong JSX, bạn phải sử dụng `htmlFor` thay vì `for` để liên kết label với input.

// LỖI
// const App = () => {
//   return (
//     <section class="section">
//       <form>
//         <label for="name">Name</label>
//         <input type="text" placeholder="Enter Your Name" id="name" />
//       </form>
//     </section>
//   );
// };

// Sửa lại:
const App4 = () => {
    return (
        <section className="section">
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Your Name" id="name" />
            </form>
        </section>
    );
};

export default App;