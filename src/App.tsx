import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.tsx";
import SignUpPage from "./page/Signup.tsx";
import HomePage from "./page/home.tsx";
import ProfilePage from "./page/profile.tsx";
import SignInPage from "./page/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
