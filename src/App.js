import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Course";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Products from "./routes/Products";
import PrivateRoute from "./routes/privateRoutes";
import { useAuthContext } from "../src/hooks/useAuthContext";
import Profile from "./routes/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="signup"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
