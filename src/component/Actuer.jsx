import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Actuer extends Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        counter: this.state.counter + 1,
      }));
    }, 1000);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.props.Acteur;
    return (
      <div className="persone">
        <Card className="card" style={{ width: "30rem" }}>
          <Card.Img src={imgSrc} />
          <Card.Body>
            <Card.Title> {fullName} </Card.Title>
            <Card.Text>{profession}</Card.Text>
            <Card.Text>{bio}</Card.Text>
            <Card.Text>Counter: {this.state.counter} seconds</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
