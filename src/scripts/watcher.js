const chokidar = require("chokidar");

async function watcher() {
    
    const watcher = chokidar.watch('.', { ignored: /(^|[\/\\])\../, persistent: true });
    const log = console.log.bind(console);

    watcher
        .on('add', path => log(`File ${path} has been added`))
        .on('change', path => log(`File ${path} has been changed`))
        .on('unlink', path => log(`File ${path} has been removed`))
        .on('raw', (event, path, details) => {
            log('Raw event info:', event, path, details);
        });
}

module.exports = watcher;
