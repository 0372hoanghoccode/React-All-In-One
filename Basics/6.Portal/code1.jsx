import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") // Render vào div có id="modal-root"
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <h1>Portal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>This is a modal!</h2>
          <p>Modal content goes here.</p>
        </Modal>
      )}
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
  },
  closeButton: {
    marginBottom: "10px",
  },
};

export default App;

// Giải thích chi tiết:
// Modal Component:

// Sử dụng ReactDOM.createPortal để render nội dung modal vào modal - root.

// Modal vẫn có thể truy cập các props và state từ component cha(App).

// App Component:

// Quản lý trạng thái mở / đóng modal bằng useState.

// Khi modal mở, nội dung modal được render vào modal - root thay vì trong cây DOM của App.

// Lợi ích:

// Modal được render ở ngoài cây DOM chính, tránh xung đột CSS và dễ dàng quản lý z - index.

// Logic của modal vẫn nằm trong React component tree, giúp dễ dàng quản lý state và props.

// Lưu ý:
// Portal không làm thay đổi cấu trúc component tree trong React.Chúng chỉ thay đổi vị trí render trong DOM.

// Bạn cần đảm bảo DOM node đích(ví dụ: modal - root) tồn tại trước khi sử dụng portal.