const chokidar = require("chokidar");

async function activateWatcher() {
    
    const watcher = chokidar.watch('.', { ignored: /(^|[\/\\])\../, persistent: true });
    const log = console.log.bind(console);

    watcher
        .on('all', (event, path) => {
            //log(`File ${path} has been added`);
            
        });
}

module.exports = activateWatcher;
