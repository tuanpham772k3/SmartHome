import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    // Xử lý đăng ký tài khoản ở đây
    console.log("Đăng ký thành công!", username, password);
  };

  return (
    <Container fluid className="login-container d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={4}>
            <h2 className="text-center">Đăng Ký Smart Home</h2>
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

              <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                <Form.Label>Xác nhận mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-4 w-100">
                Đăng ký
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RegisterForm;
