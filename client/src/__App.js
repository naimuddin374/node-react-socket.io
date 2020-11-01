import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000/";



function App() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
        // console.log('sucend connection')
        // socket.on("FromAPI2", data => {
        //   console.log(data)
        // });
    }, []);

    console.log('response', response)
    return (
        <h1>
            {/* It's <time dateTime={response}>{response}</time> */}
        </h1>
    );
}


export default App;