import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Registration from "./components/Registration";
import Search from "./components/Search";
import Employee from "./components/Employee";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  document.title='Employee App'
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/employee",
          element: <Employee />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
