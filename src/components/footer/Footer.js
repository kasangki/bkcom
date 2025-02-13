import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { version } from 'config';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-between text-left fs--1 mt-2 mb-3">
      <Col sm="auto">
        <br className="d-sm-none" />Copyright {new Date().getFullYear()} &copy;{' '}
        대연부경정보처리학원. All Rights Reserved
      </Col>
      {/* <Col sm="auto">
        <p className="mb-0 text-600">v{version}</p>
      </Col> */}
    </Row>
  </footer>
);

export default Footer;
