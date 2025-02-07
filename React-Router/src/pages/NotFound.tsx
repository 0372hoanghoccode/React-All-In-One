import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import "./Pages.css";

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div className="error-container">
      <h1>
        {isRouteErrorResponse(error) ? 'Không tìm thấy trang' : 'Có lỗi xảy ra!'}
      </h1>
      <p>
        {isRouteErrorResponse(error)
          ? "trang bạn đang tìm kiếm không tồn tại."
          : "đã xảy ra lỗi không mong muốn."}
      </p>
      <Link to="/" className="home-link">
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;