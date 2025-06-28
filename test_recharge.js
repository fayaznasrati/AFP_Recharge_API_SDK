const rechargeFunction = require("./index.js");
(async () => {
  try {
    console.log("ENV Rechage:", process.env.API_KEY, process.env.BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await rechargeFunction.recharge("0730720001", 10);
    console.log("Recharge response:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
