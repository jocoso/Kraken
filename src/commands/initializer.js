const fs = require("fs");
const path = require("path");
const {v1: uuidv1, v4: uuidv4, } = require("uuid")

const watcher = require("../scripts/watcher");

const currentdir = process.cwd();
const krakendir = currentdir + "/.kraken";
const configfile = path.join(krakendir, "kraken.json");

const createMaestro = async () => {
    // TODO: Implement the creation of a Maestro repository.
    // This might involve setting up a watcher, creating a.kraken directory,
    // and writing a basic configuration file.

    // Example:
    // watcher(); // Set up a watcher for changes in the.kraken directory
    // fs.mkdirSync(krakendir); // Create the.kraken directory
    // fs.writeFileSync(configfile, JSON.stringify({ /* Initial configuration */ }, null, 2)); // Write a basic configuration file  

    // Return a promise to indicate completion
    const maestro = {
        id: (uuidv4().toString()),
        filename: "",
        path: path.basename(currentdir)
    }
}


async function initializer(options) {
    console.log(
        `Initializing Kraken Art Version Control System repository${
            options.force ? ", forcefully" : ""
        }`
    );

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

    try {
        watcher();

         // Creating a basic conf file
        const configData = {
            projectName: path.basename(currentdir), 
            initializedOn: new Date().toISOString(),
            artworks: [

            ]
        };
        
        fs.writeFileSync(configfile, JSON.stringify(configData, null, 4));
        console.log("Artfile has been successfully initialized.");
        
    } catch (error) {
        console.error(
            "Error occurred while creating configuration file:",
            error
        );
    }

    
}

module.exports = initializer;
