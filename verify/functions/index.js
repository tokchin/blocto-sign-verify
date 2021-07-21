const functions = require("firebase-functions");
const fcl = require("@onflow/fcl");
fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
const verifyUserSignatures = require("./verifyFlowSignatures.js");

exports.verifyFlowSignatures = functions.https.onRequest(
  async (request, response) => {
    const userMessage = request.body.userMessage;
    const compSignatures = JSON.parse(request.body.compSignatures);
    const signedTimestamp = Number(userMessage);
    const currentTimestamp = new Date().getTime();
    const fiveMinPastAfterSigned = currentTimestamp - 300000 > signedTimestamp;
    const signedToFutureTimestamp = signedTimestamp > currentTimestamp;
    if (fiveMinPastAfterSigned || signedToFutureTimestamp) {
      response.send({
        result: false,
        message: "signature timeout.",
      });
      return;
    }
    const result = await verifyUserSignatures(
      utf8ToHex(userMessage),
      compSignatures
    );
    response.send({
      result: result,
      addr: compSignatures[0].addr,
      signedTimestamp: signedTimestamp,
      verifiedTimestamp: currentTimestamp,
    });
  }
);

function utf8ToHex(str) {
  return Array.from(str)
    .map((c) =>
      c.charCodeAt(0) < 128
        ? c.charCodeAt(0).toString(16)
        : encodeURIComponent(c).replace(/\%/g, "").toLowerCase()
    )
    .join("");
}
