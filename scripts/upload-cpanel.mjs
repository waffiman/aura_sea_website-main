import { Client } from "basic-ftp";
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

const client = new Client(300000);
client.ftp.verbose = process.env.FTP_VERBOSE === "1";

try {
  await client.access({ host, user, password, secure: false, passive: true });
  await client.ensureDir("/public_html");
  await client.cd("/public_html");
  console.log("Uploading", localDir, "to /public_html");
  await client.uploadFromDir(localDir);
  const htaccess = path.join(localDir, ".htaccess");
  if (fs.existsSync(htaccess)) {
    await client.uploadFrom(htaccess, ".htaccess");
  }
  console.log("Done.");
} finally {
  client.close();
}