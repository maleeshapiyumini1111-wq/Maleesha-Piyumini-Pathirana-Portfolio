import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-white py-5 min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center text-center text-md-start g-5">
          
          {/* Profile Image */}
          <Col md={4} className="text-center">
            <img
              src={profile}
              alt="Maleesha Piyumini Pathirana"
              className="img-fluid rounded-circle shadow-lg border border-4 border-primary"
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
              }}
            />
          </Col>

          {/* Introduction */}
          <Col md={8}>
            <span className="text-uppercase text-primary fw-bold fs-5">
              Welcome to My Portfolio
            </span>

            <h1 className="display-3 fw-bold mt-3 mb-3">
              Hi, I'm{' '}
              <span className="text-primary">
                Maleesha Piyumini Pathirana
              </span>
            </h1>

            <h4 className="mb-4 text-light">
              Information Technology Undergraduate
            </h4>

            <p
              className="lead"
              style={{
                lineHeight: '1.8',
                maxWidth: '700px',
              }}
            >
              I am an Information Technology Undergraduate at the
              Institute of Technology, University of Moratuwa.
              I am passionate about Software Engineering, Artificial
              Intelligence, Machine Learning, and Computer Vision.
              I enjoy building innovative software solutions and
              applying technology to solve real-world problems.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
              
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Projects
              </Button>

              <Button
                variant="outline-light"
                size="lg"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Me
              </Button>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}