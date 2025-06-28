const RechargeSDK = require("afp-recharge-api-sdk");
// const rechargeFunction = require("./index.js");

(async () => {
  try {
    console.log("ENV Balance:", process.env.API_KEY, process.env.BASE_URL, process.env.MY_IP_ADDRESS);

    const balance = await RechargeSDK.checkBalance();
    console.log("Balance:", balance);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
