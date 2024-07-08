const {GoogleAuth} = require('google-auth-library');
const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * Insert new file
 * @return{obj} file ID
 */
async function createFiles(/*clientEmail, privateKey*/) {
    

    // Get credentials and build service
    // TODO (developer) - Use appropriate auth mechanism for your app
    const datapath = path.normalize('C:\\Users\\Josh\\Downloads\\kraken-test.json');
    const authData = JSON.parse(fs.readFileSync(datapath, 'utf8'));

    const auth = new GoogleAuth({
        credentials: {
            client_email: authData.client_email,
            private_key: authData.private_key,
        },
        scopes: ['https://www.googleapis.com/auth/drive']
    });

    const service = google.drive({version: 'v3', auth});
    const requestBody = {
        name: 'render.js',
    };
    const media = {
        mimeType: 'text/plain',
        body: fs.createReadStream(path.join(__dirname, '../render.js'))
    };

    try {
        const file = await service.files.create({
            requestBody,
            media,
            fields: 'id'
        });
        console.log('File ID', file.data.id);
        return file.data.id;
    } catch (err) {
        // TODO(developer) - Handle error
        throw err;
    }
}

async function readFiles() {
    const auth = new GoogleAuth(
        {
            keyFile: path.normalize('C:\\Users\\Josh\\Downloads\\kraken-test.json'),
            scopes: ['https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({version: 'v3', auth});

    try {
        const response = await drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(id, name)'
        });

        const files = response.data.files;
        if(files.length) {
            console.log('Files:');
            files.map((file) => {
                console.log(`${file.name} (${file.id})`);
            });
        } else {
            console.log('No files found.');
        }
    } catch(err) {
        console.error('The API returned an error: ', err);
    }
}

async function updateFiles(data) {

}

async function deleteFiles(fileId) {

}

module.exports = {
    createFiles,
    readFiles,
    updateFiles,
    deleteFiles,
};
