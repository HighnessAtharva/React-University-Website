import React, { Component } from "react";
import {Row, Col, Card } from "react-bootstrap";
import "./Alumni.css"; // Your custom CSS file
import testimonialsJson from "./Testimonials";

class AlumniPage extends Component {
  render() {
    return (
      <>
      <h1>Alumni Testimonials</h1>
      <div class="fc">
      <iframe width="700" height="400" src="https://www.youtube-nocookie.com/embed/0ETk4FgSDiY?si=QX4kgrlaGFFC277v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Row>
        {testimonialsJson.map((testimonial, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="alumni-card">
            <Card>
              <Card.Img
                variant="top"
                src={
                  testimonial.imageUrl || "https://picsum.photos/130/130?random"
                }
                alt={`Alumni ${index + 1}`}
                className="alumni-image"
              />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.description}</Card.Text>
                <Card.Text>
                  <b><i><small className="text-muted">{`Graduation Year: ${testimonial.yearOfGraduation}`}</small></i></b>
                  <br></br>
                  <small className="text-muted">{`Currently At: ${testimonial.higherEducation}`}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </>
    );
  }
}

export default AlumniPage;
