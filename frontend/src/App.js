/**
 * Title: Main App Component
 * Description: React main app component
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:41:50.000-05:00
 */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import useAuthContext from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <div className="pages">
              <Routes>
                <Route
                  path="/"
                  element={user ? <Home /> : <Navigate to={"/login"} />}
                />
                <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to={"/"} />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to={"/"} />}
                />
              </Routes>
            </div>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
