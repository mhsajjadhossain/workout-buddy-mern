/**
 * Title: Main App Component
 * Description: React main app component
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:41:50.000-05:00
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
