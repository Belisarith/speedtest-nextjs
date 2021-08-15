// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { exec } = require("child_process");

function execShellCommand(cmd) {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

export default async function (req, res) {
  const speedResult = await execShellCommand("speedtest --json ");

  const { download, upload } = JSON.parse(speedResult);

  const downloadMBit = download / 1024 / 1024;
  const uploadMBit = upload / 1024 / 1024;

  res.status(200).json({ downloadMBit, uploadMBit });
}
