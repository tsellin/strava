import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cards extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs={1} md={2} className="g-4">
          {this.props.activies.map((activity) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{activity.name}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Cards;
