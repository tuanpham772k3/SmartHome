import React from 'react';
import { Button, Navbar, Container, Dropdown } from 'react-bootstrap';
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

                    {/* Dropdown cho biểu tượng cài đặt */}
                    <Dropdown align="end" style={{ marginLeft: '10px' }}>
                        <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: 'white' }}>
                            <FaCog style={{ fontSize: '24px' }} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/settings/profile">Cài đặt tài khoản</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/settings/preferences">Tùy chọn</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/help">Trợ giúp</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
