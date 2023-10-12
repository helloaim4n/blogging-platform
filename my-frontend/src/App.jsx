import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import UserProfile from "./components/Auth/UserProfile";
import BlogList from "./components/Blog/BlogList";
import BlogPost from "./components/Blog/BlogPost";
import BlogEditor from "./components/Blog/BlogEditor";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route exact path="/blog" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/edit/:id" element={<BlogEditor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
