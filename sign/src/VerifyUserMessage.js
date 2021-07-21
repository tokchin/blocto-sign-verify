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

const VerifyUserMessage = () => {
  const [message, setMessage] = useState("address");
  const [signature, setSignature] = useState("signature");
  const [signedMessage, setSignedMessage] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [compositeSignature, setCompositeSignature] = useState({
    f_type: "CompositeSignature",
    f_vsn: "1.0.0",
    addr: "",
    keyId: 1,
    signature: "",
  });
  const signUserMessage = async (event) => {
    event.preventDefault();
    const hexMessage = utf8ToHex(message);
    console.log("signature to be verify", compositeSignature);
    const response = await fcl
      .currentUser()
      .verifyUserSignatures(hexMessage, [compositeSignature]);
    console.log(response);
  };
  const updateSignature = (event) => {
    setSignature(event.target.value);
    compositeSignature.signature = event.target.value;
    setCompositeSignature(compositeSignature);
  };
  const updateUserAddress = (event) => {
    setUserAddress(event.target.value);
    compositeSignature.addr = event.target.value;
    setCompositeSignature(compositeSignature);
  };

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Card>
      <label>
        Signature:
        <input type="text" value={signature} onChange={updateSignature} />
      </label>
      <label>
        Address:
        <input type="text" value={userAddress} onChange={updateUserAddress} />
      </label>
      <label>
        Message:
        <input type="text" value={message} onChange={updateMessage} />
      </label>
      <button onClick={signUserMessage}>Sign</button>
      <br />
      userAddress: {userAddress}
      <br />
      message: {signedMessage}
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

export default VerifyUserMessage;
