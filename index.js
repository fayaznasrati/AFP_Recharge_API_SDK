const crypto = require("crypto");
const axios = require("axios");
require("dotenv").config();

const RechargeSDK = {
  generateSignature(payload) {
    const timestamp = Math.floor(Date.now() / 1000);
    const dataToSign = timestamp + JSON.stringify(payload);
    const signature = crypto
      .createHmac("sha256", process.env.SECRET_KEY)
      .update(dataToSign)
      .digest("hex");

    return { signature, timestamp };
  },

  async recharge(mobile, amount, ip = process.env.MY_IP_ADDRESS) {
    const payload = { mobile, amount };
    const { signature, timestamp } = this.generateSignature(payload);

    const headers = {
      "X-Api-Key": process.env.API_KEY,
      "X-Signature": signature,
      "X-Timestamp": timestamp,
      "x-forwarded-for": ip,
    };

    const url = `${process.env.BASE_URL}/api/v1/company/recharge`;

    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (err) {
      throw new Error(
        `Recharge failed: ${err.response?.data?.message || err.message}`
      );
    }
  },

  async checkBalance(ip = process.env.MY_IP_ADDRESS) {
    const headers = {
      "X-Api-Key": process.env.API_KEY,
      "x-forwarded-for": ip,
    };

    const url = `${process.env.BASE_URL}/api/v1/company/check-balance`;

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (err) {
      throw new Error(
        `Check balance failed: ${err.response?.data?.errors?.[0]?.msg || err.message}`
      );
    }
  },
};

module.exports = RechargeSDK;
