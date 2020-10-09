import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class Timer extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    // timerOn: false,
    // timerStart: 0,
    // timerTime: 0,
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);
  };
  stopTimer = () => {
    this.setState({ startTimer: false });
    clearInterval(this.seconds);
  };
  render() {
    return (
      <div>
        <h3 className="title">Timer :</h3>
        <Table striped bordered hover variant="dark" className="Table">
          <tbody>
            <tr>
              <td>{this.state.hours}</td>
              <td>{this.state.minutes}</td>
              <td>{this.state.seconds}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success" className="pause">
          Pause {this.stopTimer}
        </Button>
        <Button variant="success" onClick={this.startTimer}>
          Start
        </Button>
      </div>
    );
  }
  componentDidMount() {
    this.seconds = setInterval(() => {
      if (this.state.seconds < 60)
        this.setState(() => ({
          seconds: this.state.seconds + 1,
        }));
    }, 1000);
  }

  // componentWillUnmount() {
  //   this.seconds = clearInterval(() => {
  //     this.state.seconds.clearState();
  //   });
  // }
}
