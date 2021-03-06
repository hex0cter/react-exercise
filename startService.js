function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

process.on("SIGINT", () => {
  // eslint-disable-next-line no-console
  console.log("Process interrupted.");
  process.exit(15);
});

const services = ["http://localhost:3000"];
const expireTime = 60000; // timeout after 1 minutes
const checkInterval = 5000; // check every 5 seconds

async function healthCheck() {
  const axios = require("axios");
  const https = require("https");
  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  const allPromises = await Promise.all(
    services.map(async (service) => {
      let status;
      console.log("checking individual services");
      try {
        const resp = await instance.get(service);
        status = resp.status;
      } catch (error) {
        console.log("error in individual checkup", error);
        status = error.response ? error.response.status : null;
      } finally {
        console.log(`${service} ==> status: ${status}`); // eslint-disable-line no-console
      }
      console.log("return code from individual services", status);
      return status < 500;
    })
  );

  return allPromises.every((result) => result);
}

(async () => {
  let allHealthy = false;
  const startTime = Date.now();
  while (!allHealthy) {
    const currentTime = Date.now();
    if (currentTime - startTime > expireTime) {
      console.log("timeout"); // eslint-disable-line no-console
      break;
    }
    await sleep(checkInterval);

    try {
      allHealthy = await healthCheck();
    } catch (error) {
      allHealthy = false;
      console.log("exception caught, assume not ready", error)
    }
  }
  process.exit(allHealthy ? 0 : 1);
})();
