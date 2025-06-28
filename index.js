const crypto = require("crypto");
const axios = require("axios");

class RechargeSDK {
  constructor({ apiKey, secretKey, baseURL }) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.baseURL = baseURL;
  }

  generateSignature(payload) {
    const timestamp = Math.floor(Date.now() / 1000);
    const dataToSign = timestamp + JSON.stringify(payload);
    const signature = crypto
      .createHmac("sha256", this.secretKey)
      .update(dataToSign)
      .digest("hex");

    return { signature, timestamp };
  }

  async recharge({ mobile, amount, ip }) {
    const payload = { mobile, amount };
    const { signature, timestamp } = this.generateSignature(payload);

    const headers = {
      "X-Api-Key": this.apiKey,
      "X-Signature": signature,
      "X-Timestamp": timestamp,
      "x-forwarded-for": ip,
    };

    const url = `${this.baseURL}/api/v1/company/recharge`;

    try {
      const response = await axios.post(url, payload, { headers });
        const result= {
            response: response.data,
        };
   
      return result;
    } catch (err) {
      throw new Error(
        `Recharge failed: ${err}`
        `Recharge failed: ${err.response?.data?.message || err.message}`,
      );
    }
  }

  async checkBalance({ ip }) {
    const headers = {
      "X-Api-Key": this.apiKey,
      "x-forwarded-for": ip,
    };

    const url = `${this.baseURL}/api/v1/company/check-balance`;

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (err) {
      throw new Error(
        `Check balance failed: ${err.response?.data?.errors[0].msg}`
      );
    }
  }
}

module.exports = RechargeSDK;
