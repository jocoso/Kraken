const chokidar = require("chokidar");

async function watcher() {
    chokidar.watch(".").on("all", (event, path) => {
        console.log(event, path);
    });
}

module.exports = watcher;
