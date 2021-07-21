import * as fcl from "@onflow/fcl";
fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
import verifyUserSignatures from "./verifyFlowSignatures.js";

const compSignatures = [
  {
    f_type: "CompositeSignature",
    f_vsn: "1.0.0",
    addr: "0xc75c8872957bd01f",
    keyId: 1,
    signature:
      "fc76c278c2cac765961f08bf83fda792487f6fdfd71028f534772c1ec339ab9da356a21e0c6c9dc2dca40b3d6e4765750ee6bf7bc2583e612615ce398339cb43",
  },
];
test("verify test", async () => {
  function utf8ToHex(str) {
    return Array.from(str)
      .map((c) =>
        c.charCodeAt(0) < 128
          ? c.charCodeAt(0).toString(16)
          : encodeURIComponent(c).replace(/\%/g, "").toLowerCase()
      )
      .join("");
  }
  const result = await verifyUserSignatures(
    utf8ToHex("1626880155995"),
    compSignatures
  );
  console.log(compSignatures);
  expect(result).toBeTruthy();
});
