import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./faculty.css";
import facultyData from "./facultyData";
import supportStaffData from "./supportStaffData";

class FacultyPage extends Component {
  render() {
    const facultyRows = this.createRows(facultyData, 2).map((row, index) => (
      <Row key={index}>
        {row.map((faculty) => (
          <Col sm={12} md={8} lg={6} key={faculty.name}>
            {this.renderFacultyCard(faculty)}
          </Col>
        ))}
      </Row>
    ));

    const supportStaffRows = this.createRows(supportStaffData, 2).map((row, index) => (
      <Row key={index}>
        {row.map((staff) => (
          <Col sm={12} md={8} lg={6} key={staff.name}>
            {this.renderSupportStaffCard(staff)}
          </Col>
        ))}
      </Row>
    ));

    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff", height: "60px" }}
          className="text-center"
          fluid
        >
          <Row>
            <Col>
              <h1 style={{ textAlign: "center", margin: "5px", padding: "10px" }}>
                Faculty List 
              </h1>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5">{facultyRows}</Container>
        <Container>
          <h1 style={{ textAlign: "center", marginTop: "5px", paddingTop: "10px" }}>
            Support Staff
          </h1>
        </Container>
        <Container className="mt-5 mb-5">{supportStaffRows}</Container>
      </section>
    );
  }

  renderFacultyCard(faculty) {
    return (
      <div className="faculty-card">
        <div className="faculty-image">
          <Image src={faculty.image} fluid />
          <a href={faculty.url}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="faculty-details">
          <h5 className="name">{faculty.name}</h5>
          <h6 className="title">{faculty.designation}</h6>
          <p className="faculty-info">
            <span>Qualification: {faculty.qualification}</span>
            <span>Experience: {faculty.experience}</span>
            <span>Email: {faculty.email}</span>
            <span>Phone: {faculty.phone}</span>
          </p>
        </div>
      </div>
    );
  }

  renderSupportStaffCard(staff) {
    return (
      <div className="faculty-card">
        <div className="faculty-image">
          <Image src={staff.image} fluid />
        </div>
        <div className= "faculty-details">
          <h5 className="name">{staff.name}</h5>
          <h6 className="title">{staff.designation}</h6>
          <p className="faculty-info">
            <span>Qualification: {staff.qualification}</span>
            {staff.email && <span>Email: {staff.email}</span>}
          </p>
        </div>
      </div>
    );
  }

  createRows(data, itemsPerRow) {
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow));
    }
    return rows;
  }
}

export default FacultyPage;
