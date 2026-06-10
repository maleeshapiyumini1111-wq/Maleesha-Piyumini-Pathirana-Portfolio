import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function About() {
  const technicalSkills = ["Java (Spring Boot)", "React.js", "MySQL", "Data Science", "Python", "R Language", "HTML/CSS/JS"];
  const creativeSkills = ["Graphic Design", "Adobe Illustrator", "Voice-Over Narration", "Digital Storytelling"];

  return (
    <section id="about" className="py-5 bg-white min-vh-100 d-flex align-items-center">
      <Container>
        <h2 className="text-center fw-bold display-5 mb-5 text-dark">About Me</h2>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <h3 className="fw-bold text-secondary mb-3">Who I Am</h3>
            <p className="fs-5 text-muted justify-content">
              I am an Information Technology Undergraduate at the <strong>Institute of Technology, University of Moratuwa</strong>. 
              As a bilingual content creator and voice-over artist proficient in both Sinhala and English, I bridge the gap between technical complexity and creative communication.
            </p>
            <p className="fs-5 text-muted justify-content">
              My core analytical passion lies within <strong>Data Science and Predictive Intelligence</strong>. I am driven to build full-stack solutions that possess real impact, prioritizing clean UX architecture and operational performance.
            </p>
            
            <h4 className="fw-bold text-secondary mt-4 mb-3">Education Background</h4>
            <div className="border-start border-3 border-primary ps-3 mb-3">
              <h5 className="fw-bold mb-1">National Diploma in Technology (NDT) in IT</h5>
              <p className="text-muted mb-0">Institute of Technology, University of Moratuwa | 2026 - Present</p>
            </div>
            <div className="border-start border-3 border-secondary ps-3">
              <h5 className="fw-bold mb-1">G.C.E. Advanced Level (Physical Science Stream)</h5>
              <p className="text-muted mb-0">Mahinda Rajapakshe College-Matara| Combined Mathematics, Physics, Chemistry</p>
            </div>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm p-4 bg-light mb-3">
              <Card.Body>
                <h4 className="fw-bold text-primary mb-3">Technical Expertise</h4>
                <div>
                  {technicalSkills.map((skill, idx) => (
                    <Badge key={idx} bg="dark" className="me-2 mb-2 p-2 fs-6">{skill}</Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
            <Card className="border-0 shadow-sm p-4 bg-light">
              <Card.Body>
                <h4 className="fw-bold text-success mb-3">Other Skills</h4>
                <div>
                  {creativeSkills.map((skill, idx) => (
                    <Badge key={idx} bg="success" className="me-2 mb-2 p-2 fs-6">{skill}</Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}