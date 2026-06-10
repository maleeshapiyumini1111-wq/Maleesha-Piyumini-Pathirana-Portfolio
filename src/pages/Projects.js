import React from 'react';
import { Container, Accordion, Row, Col, Button } from 'react-bootstrap';
export default function Projects() {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "Currently developing a movie recommendation system that helps users discover movies based on genres, ratings, and storyline information. The system is designed to provide better movie suggestions by analyzing available movie data and user preferences.",
      technologies: "Python, Pandas, Streamlit, Machine Learning"
    },

    {
      title: "Real-Time Face Recognition System",
      description:
        "Developed an intelligent computer vision system that detects faces in real time, tracks the number of people present, and identifies emotions such as happiness, sadness, anger, and surprise. Registered users are recognized automatically, and their name and role are displayed on the screen. The project was developed to explore face recognition, emotion detection, and real-time video processing techniques.",
      technologies: "Python, OpenCV, TensorFlow, Deep Learning"
       
    },

    {
      title: "MindBloom",
      description:
        "Developed a student wellbeing platform to support university students in managing academic stress and maintaining a balanced lifestyle. The platform provides resources and guidance aimed at improving student wellbeing.",
      technologies: "React.js, Flask, Python"
    },

    {
      title: "Surplus Food Redistribution System",
      description:
        "Currently working on a final-year project that aims to connect supermarkets with charitable organizations to redistribute surplus food efficiently and reduce food waste.",
      technologies: "React.js, Python, MongoDB, AI"
    },

    {
     title: "Smart Home Automation & Safety System",
     description:
       "Designed and developed an embedded smart home automation system using the ATmega32 microcontroller. The system implements a conditional priority hierarchy to manage safety-critical operations, environmental monitoring, and home automation tasks. Features include intrusion detection, gas and fire hazard monitoring, automatic exhaust fan control, room temperature management, ambient light-based night lighting, and automated water level control. The project enhanced my knowledge of embedded systems, microcontroller programming, sensor integration, and real-time decision-making.",
     technologies: "ATmega32, Embedded C, AVR, LCD, PIR Sensor, LDR, Temperature Sensor"
   }
  ];

  return (
    <section
      id="projects"
      className="py-5 bg-light min-vh-100 d-flex align-items-center"
    >
      <Container>
        <h2 className="text-center fw-bold display-5 mb-5 text-dark">
          Projects & Innovation
        </h2>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Accordion defaultActiveKey="0" className="shadow-sm">
              {projects.map((project, idx) => (
                <Accordion.Item
                  eventKey={String(idx)}
                  key={idx}
                  className="mb-3 border-0 rounded overflow-hidden"
                >
                  <Accordion.Header>
                    <span className="fw-bold fs-5">
                      {project.title}
                    </span>
                  </Accordion.Header>

                  <Accordion.Body>
                    <p>
                      <strong>Technologies Used:</strong>{" "}
                      <span className="text-primary">
                        {project.technologies}
                      </span>
                    </p>

                    <p style={{ lineHeight: "1.8" }}>
                      {project.description}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            {/* GitHub & LinkedIn */}
            <div className="text-center mt-5">
              <h4 className="mb-4">Connect With Me</h4>

              <Button
                variant="dark"
                className="me-3"
                href="https://github.com/maleeshapiyumini1111-wq"
                target="_blank"
              >
                GitHub Profile
              </Button>

              <Button
                variant="primary"
                href="https://www.linkedin.com/in/maleesha-piyumini-710b5a311"
                target="_blank"
              >
                LinkedIn Profile
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}