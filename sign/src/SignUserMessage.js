import React, { useState } from "react";
import * as fcl from "@onflow/fcl";
import styled from "styled-components";

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;

const Code = styled.pre`
  background: #f0f0f0;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  padding: 5px;
`;

const GetLatestBlock = () => {
  const [signedMessage, setSignedMessage] = useState("--");
  const [compSignatures, setCompSignatures] = useState("--");
  const [userAddress, setUserAddress] = useState("--");

  const signUserMessage = async (event) => {
    event.preventDefault();
    const currentTimestamp = String(new Date().getTime());
    const hexMessage = utf8ToHex(currentTimestamp);
    const compSignatures = await fcl.currentUser().signUserMessage(hexMessage);
    window.parent.postMessage(
      {
        message: "compSignatures",
        value: {
          signedMessage: currentTimestamp,
          compSignatures: compSignatures,
        },
      },
      "*"
    );
    setSignedMessage(currentTimestamp);
    setCompSignatures(JSON.stringify(compSignatures));
    setUserAddress(compSignatures[0].addr);
  };

  return (
    <Card>
      <button onClick={signUserMessage}>Sign</button>
      <br />
      userAddress: {userAddress}
      <br />
      message: {signedMessage}
      <br />
      compSignatures: {compSignatures}
    </Card>
  );
};
function utf8ToHex(str) {
  return Array.from(str)
    .map((c) =>
      c.charCodeAt(0) < 128
        ? c.charCodeAt(0).toString(16)
        : encodeURIComponent(c).replace(/\%/g, "").toLowerCase()
    )
    .join("");
}
function hexToUtf8(hex) {
  return decodeURIComponent("%" + hex.match(/.{1,2}/g).join("%"));
}
export default GetLatestBlock;
