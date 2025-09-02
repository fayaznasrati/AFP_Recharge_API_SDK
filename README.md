# AFP Recharge API SDK

The **AFP Recharge API SDK** enables approved third-party companies to securely integrate with AfghanPay's Recharge API system to perform **mobile recharges** and **balance checks** using a simple Node.js interface.

---

## 📋 Access Requirements

Before using this SDK, your company must complete the official onboarding process:

1. **Contact AfghanPay** to request API access.
2. **Complete KYC documentation** provided by our team.
3. **Establish VPN connectivity** with AfghanPay.
4. **Receive credentials**:
   - A unique **API Key**
   - A one-time **Secret Key**

---

## 🌐 Environment Configuration

Create a `.env` file in your project root with the following variables:

```env
API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here
AFP_BASE_URL=http://172.28.28.103         # AfghanPay Internal API IP
MY_IP_ADDRESS=your_whitelisted_ip     # Provided during VPN setup


##  📦 Installation

npm install afp-recharge-api-sdk

##  🚀 Usage
## 🔋 Recharge Example

const rechargeFunction = require("afp-recharge-api-sdk");
require("dotenv").config();

(async () => {
  try {
    console.log("ENV Recharge:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await rechargeFunction.recharge("0730720001", 10);
    console.log("Recharge response:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();



## 💰 Check Balance Example
const rechargeFunction = require("afp-recharge-api-sdk");
require("dotenv").config();

(async () => {
  try {
    console.log("ENV Balance:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const balance = await rechargeFunction.checkBalance();
    console.log("Balance:", balance);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();

## Check Rechage status call back
const rechargeFunction = require("afp-recharge-api-sdk");
require("dotenv").config();

(async () => {
  try {
    console.log("ENV Rechage:", process.env.API_KEY, process.env.AFP_BASE_URL, process.env.MY_IP_ADDRESS);

    const result = await RechargeSDK.rechargeStatus("0730720001", 6, "150625131451259" );
    console.log("Recharge response status:", result);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();



## 📞 Support
If you need assistance with VPN setup, onboarding, or debugging integration, please contact the AfghanPay technical team through your official channel.

