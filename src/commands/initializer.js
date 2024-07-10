const fs = require("fs");
const path = require("path");

const watcher = require("../scripts/watcher");

async function initializer(options) {
    console.log(
        `Initializing Kraken Art Version Control System repository${
            options.force ? ", forcefully" : ""
        }`
    );

    const currentdir = process.cwd();
    const krakendir = currentdir + "/.kraken";
    const configfile = path.join(krakendir, "kraken.json");

    // Checking if exists already
    if (options.force && fs.existsSync(krakendir)) {
        // If the file exists but the user insists
        // Delete current config file
        fs.rmSync(krakendir, { recursive: true, force: true }); // Remove the directory
    }

    if (fs.existsSync(configfile)) {
        // If the file exists
        console.log("Art file has already been initialized in this directory."); // Complain and leave
        return;
    } else {
        // If folder does not exists
        fs.mkdirSync(krakendir); // Make it
    }

    // Creating a basic conf file
    const configData = {
        project: path.basename(currentdir), // TODO(developer): placeholder name replaced with file name
        initialized: new Date().toISOString(),
    };

    try {
        fs.writeFileSync(configfile, JSON.stringify(configData, null, 4));
        console.log("Artfile has been successfully initialized.");
        watcher();
    } catch (error) {
        console.error(
            "Error occurred while creating configuration file:",
            error
        );
    }

    
}

module.exports = initializer;
