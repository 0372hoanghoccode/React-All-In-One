import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Component layout chính chứa navigation và outlet cho các route con
const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

// Cấu hình router sử dụng createBrowserRouter mới của v7
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Route mặc định
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;