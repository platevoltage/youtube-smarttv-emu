const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

module.exports = async function (context) {
  const appPath = context.appOutDir;
  // const widevinePath = path.join(appPath);

  if (fs.existsSync(appPath)) {
    console.log("Signing Widevine...");
    try {
      execSync(`evs-vmp sign-pkg "${appPath}"`, {
        stdio: "inherit",
      });
      console.log("Widevine signed successfully.");
    } catch (error) {
      console.error("Failed to sign Widevine:", error);
      process.exit(1);
    }
  } else {
    console.log("Widevine binary not found, skipping signing. ", appPath);
  }
};
