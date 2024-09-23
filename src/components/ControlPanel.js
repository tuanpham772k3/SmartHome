import React, { useState } from 'react';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';

const ControlPanel = () => {
  const [doorStatus, setDoorStatus] = useState('Đóng');
  const [message, setMessage] = useState('');

  const openDoor = () => {
    setDoorStatus('Mở');
    setMessage('Cửa đã mở thành công!');
  };

  const closeDoor = () => {
    setDoorStatus('Đóng');
    setMessage('Cửa đã đóng thành công!');
  };

  return (
    <>
      
      <Container fluid className="control-panel d-flex justify-content-center align-items-center vh-100">
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col md={4}>
              <h2 className="text-center">Điều Khiển Cửa</h2>
              {message && <Alert variant="success">{message}</Alert>}
              <h4 className="text-center">Trạng thái cửa: {doorStatus}</h4>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="success" onClick={openDoor}>
                  Mở Cửa
                </Button>
                <Button variant="danger" onClick={closeDoor}>
                  Đóng Cửa
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ControlPanel;
