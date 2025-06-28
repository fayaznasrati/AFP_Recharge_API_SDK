const RechargeSDK = require("./index");
const dotenv = require('dotenv');
dotenv.config()

const sdk = new RechargeSDK({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    baseURL: process.env.BASE_URL,
});


(async () => {
  try {
    // 🔋 Recharge
    var rechargeData = {
      mobile: "0730720001", 
      amount: 1,
      ip: process.env.MY_IP_ADDRESS}

    const result = await sdk.recharge(rechargeData);
    console.log("Recharge Response:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
