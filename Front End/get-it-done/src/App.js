import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/To-do";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={user ? <Todo /> : <Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
