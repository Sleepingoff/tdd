import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.tsx";
import SignUpPage from "./page/SignUp.tsx";
import HomePage from "./page/Home.tsx";
import ProfilePage from "./page/Profile.tsx";
import SignInPage from "./page/SignIn.tsx";
import GlobalStyles from "./styles/global.tsx";

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
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
