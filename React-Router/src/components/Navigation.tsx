import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Giới thiệu
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;