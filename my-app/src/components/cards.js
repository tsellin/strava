import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Cards extends Component {
  formatDate(d, months) {
    const date = new Date(d);
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
  }

  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <Row
        xs={1}
        md={1}
        style={{ height: "82vh" }}
        className="g-4 overflow-auto"
      >
        {this.props.activities
          .filter((activity) => activity.type === "Run")
          .map((activity) => (
            <div className="mb-2">
              <Col key={activity.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {this.formatDate(activity.start_date, months)}
                    </Card.Title>
                    <Card.Subtitle>
                      {activity.distance.toFixed(0)} m
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
      </Row>
    );
  }
}

export default Cards;
