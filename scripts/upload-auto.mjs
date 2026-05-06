import { Client } from "basic-ftp";
import SftpClient from "ssh2-sftp-client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localDir = path.join(root, "dist", "public");
const user = process.env.FTP_USER;
const password = process.env.FTP_PASS;
const host = process.env.FTP_HOST || "198.251.88.188";

if (!user || !password) {
  console.error("Set FTP_USER and FTP_PASS");
  process.exit(1);
}
if (!fs.existsSync(path.join(localDir, "index.html"))) {
  console.error("Run npm run build:pages first");
  process.exit(1);
}

const tlsInsecure = process.env.FTP_TLS_INSECURE === "1";
const secureOptions = tlsInsecure ? { rejectUnauthorized: false } : undefined;

async function tryFtp(secure, label) {
  const client = new Client(120000);
  client.ftp.verbose = process.env.FTP_VERBOSE === "1";
  try {
    await client.access({
      host,
      user,
      password,
      secure,
      passive: true,
      secureOptions,
    });
    await client.ensureDir("/public_html");
    await client.cd("/public_html");
    console.log(label + ": uploading to /public_html");
    await client.uploadFromDir(localDir);
    const htaccess = path.join(localDir, ".htaccess");
    if (fs.existsSync(htaccess)) {
      await client.uploadFrom(htaccess, ".htaccess");
    }
    console.log("Done (" + label + ").");
    return true;
  } finally {
    client.close();
  }
}

async function trySftp(port) {
  const sftp = new SftpClient();
  const remoteBase = process.env.SFTP_REMOTE || "public_html";
  try {
    await sftp.connect({
      host,
      port,
      username: user,
      password,
      readyTimeout: 120000,
    });
    console.log("SFTP port " + port + " ok, cwd:", await sftp.cwd());
    await sftp.uploadDir(localDir, remoteBase);
    console.log("Done (SFTP:" + port + ").");
    return true;
  } finally {
    await sftp.end();
  }
}

const ftpSteps = [
  ["FTP (plain)", () => tryFtp(false, "FTP plain")],
  ["FTPS (TLS explicit)", () => tryFtp(true, "FTPS explicit")],
];

for (const [name, fn] of ftpSteps) {
  try {
    if (await fn()) process.exit(0);
  } catch (e) {
    console.warn(name + " failed:", e && e.message ? e.message : e);
  }
}

for (const port of [22, 2222]) {
  try {
    if (await trySftp(port)) process.exit(0);
  } catch (e) {
    console.warn("SFTP:" + port + " failed:", e && e.message ? e.message : e);
  }
}

console.error("All methods failed. Try: mobile hotspot, VPN, or cPanel File Manager (HTTPS).");
process.exit(1);