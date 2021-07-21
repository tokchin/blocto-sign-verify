import React from "react";
import styled from "styled-components";

import Authenticate from "./Authenticate.js";
import SignUserMessage from "./SignUserMessage.js";
const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Authenticate />
      <SignUserMessage />
    </Wrapper>
  );
}

export default App;
