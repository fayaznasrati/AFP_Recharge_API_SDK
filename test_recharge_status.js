const RechargeSDK = require("afp-recharge-api-sdk");
// const RechargeSDK = require("./index.js");
(async () => {
  try {
    console.log("ENV Rechage:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await RechargeSDK.rechargeStatus("0730720001", 6, "150625131451259" );
    console.log("Recharge response status:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
