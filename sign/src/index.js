import React from "react";
import ReactDOM from "react-dom";
import * as fcl from "@onflow/fcl";
import "./index.css";
import App from "./App";

fcl
  .config()
  .put("accessNode.api", "https://access-testnet.onflow.org")
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
