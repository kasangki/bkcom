import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { version } from 'config';

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-between text-left fs--1 mt-4 mb-0">
      <Col  sm="auto">
        <p className="mb-0 text-1000">
          대연부경정보처리학원{' '} | 대표 : 강상기 | 주소 : 부산시 남구 수영로 297 (대연동 대영빌딩 8층)           
        </p>       
        <p className="mb-0 text-1000">         
          대표전화 : 051-622-7296 | E-mail : bkcomedu@gmail.com | 사업자등록번호 : 402-94-09884 | 교육청등록번호 : 제3200962호
        </p>  
        <p className="mb-0 text-600">
          Copyright
          <span className="d-none d-sm-inline-block">| </span>
          <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{' '}
          대연부경정보처리학원. All Rights Reserved
        </p>
      </Col>
      {/* <Col sm="auto">
        <p className="mb-0 text-600">v{version}</p>
      </Col> */}
    </Row>
  </footer>
);

export default Footer;
