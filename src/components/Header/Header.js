import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // Import biểu tượng cài đặt từ react-icons

const Header = ({ onLogout }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-between">
                <Navbar.Brand as={Link} to="/control">
                    {/* Thêm tên hoặc logo nếu cần */}
                </Navbar.Brand>
                <div className="d-flex align-items-center ml-auto">
                    <Button variant="outline-light" onClick={onLogout}>
                        Đăng xuất
                    </Button>
                    <FaCog
                        style={{
                            marginLeft: '10px',
                            color: 'white',
                            fontSize: '24px' // Tăng kích thước biểu tượng
                        }}
                    />
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
