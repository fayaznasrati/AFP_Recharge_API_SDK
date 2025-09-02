const RechargeSDK = require("afp-recharge-api-sdk");
// const rechargeFunction = require("./index.js");
(async () => {
  try {
    console.log("ENV Rechage:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await RechargeSDK.recharge("0730720001", 10);
    console.log("Recharge response:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
