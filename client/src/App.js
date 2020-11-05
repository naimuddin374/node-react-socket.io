import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Reservation from './actions/reservationAction'
import UserRouter from './components/UserRouter';


const ENDPOINT = "http://localhost:4000/";

class App extends Component {
  state = {
    reservations: []
  }

  async componentDidMount() {
    // let reservation = new Reservation()
    // let response = await reservation.getAllQrCode()
    // console.log(response)

    // const socket = socketIOClient(ENDPOINT);
    // socket.on("reservationEmitChannel", data => {
    //   this.setState({
    //     reservations: data
    //   })
    // });
  }

  render() {
    let { reservations } = this.state

    return (
      <>
        <UserRouter />
        {/* <h1>{Object.keys(reservations).length}</h1> */}
      </>
    );
  }
}

export default App;