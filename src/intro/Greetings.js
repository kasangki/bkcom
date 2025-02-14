import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import invite from 'assets/img/icons/spot-illustrations/greetings.png';
import gmail from 'assets/img/logos/korea.png';
import { Link } from 'react-router-dom';
import IconButton from 'components/common/IconButton';
import InvitePeopleModal from './InvitePeopleModal';
import Association from 'components/pages/asscociations/Association';


const InvitePeople = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    setShowModal(true);
  };


 
  return (
    <>
      <Card>
        <Card.Body className="text-center py-5">
          <Row className="justify-content-center">
            <Col xs={7} md={5}>
              <img className="img-fluid" src={invite} alt="image" width="58%" />
            </Col>
          </Row>
          <h3 className="mt-3 fw-normal fs-2 mt-md-4 fs-md-3">
            배움의 기회를 제공합니다, 지금 이 순간부터!
          </h3>
          <p className="lead mb-5">
            컴퓨터 기술을 배우는 것만큼 중요한 것은 그것을 활용하는 것입니다.
            <br className="d-none d-md-block" /> 여러분의 능력을 키워나가고, 그 능력으로 세상과 소통할 수 있도록 돕겠습니다.
            <br className="d-none d-md-block" />언제나 최선을 다하는 학원이 되겠습니다.
          </p>

        </Card.Body>

        <Card.Footer className="bg-light text-center pt-4">
          <Row className="justify-content-center">
            <Col xs={11} sm={10}>
              {/* <h4 className="fw-normal mb-0 fs-1 fs-md-2">
                More ways to <br className="d-sm-none" /> invite your friends
              </h4> */}

              <Row className="gx-2 my-4">
                <Col lg={4}>
                
        
                
                  <Button
                    variant="falcon-default"
                    className="d-block w-10 mb-2 mb-xl-0"
                  >
                    <a href="https://www.work24.go.kr">
                    <img src={gmail} width="30" alt="icon" />
                       <span className="fw-medium ms-2">고용24</span> 
                       </a>
                  </Button>

                  {/* <Association
                                  image={gmail}
                                  title="고용24"
                                  description=""
                                  to="https://www.work24.go.kr"
                                /> */}
                 
                </Col>
                
                <Col lg={4}> 
                  <IconButton
                    className="d-block w-100 mb-2 mb-xl-0"
                    iconClassName="me-2"
                    variant="falcon-default"
                    icon="link"
                    onClick={handleCopy}
                  >
                    Copy Link
                  </IconButton>
                </Col>
                <Col lg={4}>
                  <IconButton
                    className="d-block w-100 mb-xl-0"
                    variant="falcon-default"
                    icon={['fab', 'facebook-square']}
                    iconClassName="text-facebook me-2"
                    transform="grow-2"
                  >
                    Share on Facebook
                  </IconButton>
                </Col>
              </Row>

              <p className="mb-2 fs--1">
                대연부경정보처리학원 | 대표 : 강상기 | 주소 : 부산시 남구 수영로 297 (대연동 대영빌딩 8층){' '}
                <Link to="#!">view the status of your referrals</Link>{' '}
                <br className="d-none d-lg-block d-xxl-none" /> 대표전화 : 051-622-7296 | E-mail : bkcomedu@gmail.com{' '}

                {/* <Link to="#!">Help Center</Link> if you have any questions.{' '} */}
              </p>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      {/* <InvitePeopleModal show={showModal} setShow={setShowModal} /> */}
    </>
  );
};

export default InvitePeople;
