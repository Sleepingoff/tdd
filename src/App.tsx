import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.tsx";
import SignUpPage from "./page/SignUp.tsx";
import HomePage from "./page/Home.tsx";
import ProfilePage from "./page/Profile.tsx";
import SignInPage from "./page/SignIn.tsx";
import GlobalStyles from "./styles/global.tsx";
import { useEffect, useState } from "react";
import Loading from "./components/loading.tsx";
import { auth } from "./firebase.ts";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const init = async () => {
    //wait for firebase
    await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
