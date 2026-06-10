import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ show: false, variant: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ show: true, variant: 'danger', msg: 'Please error-check your fields. All inputs are mandatory.' });
      return;
    }
    setStatus({ show: true, variant: 'success', msg: 'Thank you for reaching out! Your submission has been captured successfully.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-white min-vh-100 d-flex align-items-center">
      <Container>
        <h2 className="text-center fw-bold display-5 mb-5 text-dark">Connect With Me</h2>
        <Row className="justify-content-center g-4">
          <Col lg={5}>
            <Card className="border-0 bg-dark text-white p-4 h-100 shadow-sm justify-content-center">
              <Card.Body>
                <h4 className="fw-bold text-primary mb-4">Contact Details</h4>
                <p className="mb-3"> <strong>Location:</strong> Colombo, Sri Lanka</p>
                <p className="mb-3"> <strong>Institution:</strong> ITUM, University of Moratuwa</p>
                <p className="mb-0"> <strong>Freelance Platforms:</strong> Voice-over Artist </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            {status.show && (
              <Alert variant={status.variant} onClose={() => setStatus({ ...status, show: false })} dismissible className="fw-medium">
                {status.msg}
              </Alert>
            )}
            <Form onSubmit={handleFormSubmit} className="p-4 bg-light rounded shadow-sm">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Email Address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 py-2 fw-bold fs-5 shadow-sm">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}