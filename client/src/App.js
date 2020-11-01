import React, { Component } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000/";


class App extends Component {
  state = {
    reservations: []
  }

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    socket.on("reservationEmitChannel", data => {
      this.setState({
        reservations: data
      })
    });
  }

  render() {
    let { reservations } = this.state
    console.log(reservations)

    return (
      <div>
        <h1>{Object.keys(reservations).length}</h1>
      </div>
    );
  }
}

export default App;