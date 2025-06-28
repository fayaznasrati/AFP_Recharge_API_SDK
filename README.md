# AFP Recharge API SDK

This SDK enables approved third-party companies to interact with the AFP Recharge API system to perform secure mobile recharges and balance checks via a simple Node.js interface.

---

## 📋 Requirements for Access

Before using this SDK, your company must go through the official onboarding process:

1. **Contact AfghanPay** to request API access.
2. **Complete KYC Documentation** provided by our team.
3. **Establish VPN Connectivity** with AfghanPay for secure communication.
4. **Receive Credentials**:
   - A unique **API Key**
   - A one-time **Secret Key**

Once onboarding is completed, your company can use this SDK to connect securely to the AFP Recharge API.

---

# Create a .env file in your project root with the following variables:

API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here
BASE_URL=http://172.28.28.103  ** this is Afghan-pay IP **
MY_IP_ADDRESS=your_whitelisted_ip
----

## 📦 Installation

```bash
npm install afp-recharge-api-sdk


#  to call rechage service :

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


   
#  to call check balance service
      // const RechargeSDK = require("afp-recharge-api-sdk");
      const rechargeFunction = require("./index.js");

      (async () => {
      try {
         console.log("ENV Balance:", process.env.API_KEY, process.env.BASE_URL, process.env.MY_IP_ADDRESS);

         const balance = await rechargeFunction.checkBalance();
         console.log("Balance:", balance);
      } catch (err) {
         console.error("Error:", err.message);
      }
      })();


 

