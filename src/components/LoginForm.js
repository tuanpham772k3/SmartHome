import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./Css/LoginForm.css";


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate được sử dụng bên trong Router

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '123456') {
      onLogin(true);  // Đăng nhập thành công
      setError('');
      navigate('/control');  // Chuyển hướng đến trang điều khiển
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
      onLogin(false);  // Đăng nhập thất bại
    }
  };

  return (
    <Container fluid className="login-container d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={4}>
            <h2 className="text-center">Đăng Nhập Smart Home</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-4 w-100">
                Đăng nhập
              </Button>
            </Form>
            <div className="text-center mt-3">
              <p>Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LoginForm;
