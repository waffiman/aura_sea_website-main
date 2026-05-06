import SftpClient from "ssh2-sftp-client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localDir = path.join(root, "dist", "public");
const user = process.env.FTP_USER;
const password = process.env.FTP_PASS;
const host = process.env.FTP_HOST || "198.251.88.188";
const port = parseInt(process.env.SFTP_PORT || "22", 10);

if (!user || !password) {
  console.error("Set FTP_USER and FTP_PASS");
  process.exit(1);
}
if (!fs.existsSync(path.join(localDir, "index.html"))) {
  console.error("Run npm run build:pages first");
  process.exit(1);
}

const remoteBase = process.env.SFTP_REMOTE || "public_html";
const sftp = new SftpClient();
try {
  await sftp.connect({
    host,
    port,
    username: user,
    password,
    readyTimeout: 120000,
  });
  console.log("SFTP ok, cwd:", await sftp.cwd());
  console.log("Upload", localDir, "->", remoteBase);
  await sftp.uploadDir(localDir, remoteBase);
  console.log("Done.");
} catch (e) {
  console.error(e.message || e);
  process.exit(1);
} finally {
  sftp.end();
}