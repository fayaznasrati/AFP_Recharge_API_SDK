const RechargeSDK = require("afp-recharge-api-sdk");
// const RechargeSDK = require("./index.js");
(async () => {
  try {
    console.log("ENV Rechage:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await RechargeSDK.recharge("0730720001", 1, "250625139320259" );
    console.log("Recharge response:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
