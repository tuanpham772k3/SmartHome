import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ControlPanel from './components/ControlPanel';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Layout = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="App">
      {isLoggedIn && <Header onLogout={onLogout} />} {/* Hiển thị Header sau khi đăng nhập */}
      <Outlet /> {/* Hiển thị nội dung của các Route con */}
    </div>
  );
};

const LoginFormWrapper = ({ onLogin }) => {
  return <LoginForm onLogin={onLogin} />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Kiểm tra localStorage để xác định trạng thái đăng nhập
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const navigate = useNavigate(); // Sử dụng để điều hướng mà không reload

  const handleLogin = (success) => {
    setIsLoggedIn(success);
    if (success) {
      localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
      navigate('/control'); // Điều hướng đến trang ControlPanel
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
    navigate('/'); // Điều hướng về trang đăng nhập
  };

  return (
    <Routes>
      <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
        {/* Đường dẫn gốc */}
        <Route path="/" element={<LoginFormWrapper onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* Đường dẫn đến ControlPanel chỉ hiển thị khi đã đăng nhập */}
        <Route
          path="/control"
          element={isLoggedIn ? <ControlPanel /> : <LoginFormWrapper onLogin={handleLogin} />}
        />
      </Route>
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
