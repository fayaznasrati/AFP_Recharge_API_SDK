const RechargeSDK = require("./index");
const dotenv= require("dotenv");
dotenv.config();

const sdk = new RechargeSDK({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY,
    baseURL: process.env.BASE_URL,
});


(async () => {
  try {

    // 💰 Balance check
    const balance = await sdk.checkBalance({ ip: process.env.MY_IP_ADDRESS });
    console.log("Company balance:", balance);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
