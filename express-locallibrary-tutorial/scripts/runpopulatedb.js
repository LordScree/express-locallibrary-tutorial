require('dotenv').config();
const { exec } = require("child_process");

exec("node populatedb " + process.env.DB_CONNSTR, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
