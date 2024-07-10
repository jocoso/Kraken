const {GoogleAuth} = require('google-auth-library');
const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * Insert new file
 * @return{obj} file ID
 */
async function createFiles(/*clientEmail, privateKey*/) {
    
    // TODO (developer) - Use appropriate auth mechanism for your app
    //This is like finding a secret map we could use to find a treasure
    const datapath = path.normalize('C:\\Users\\Josh\\Downloads\\kraken-test.json');
    // We open the treasure map to see the best location to put it
    const authData = JSON.parse(fs.readFileSync(datapath, 'utf8'));

    // We follow our map's instructions and hire a boatman
    const auth = new GoogleAuth({
        credentials: {
            client_email: authData.client_email, // We tell him our name
            private_key: authData.private_key,   // And our darkest secret
        },
        scopes: ['https://www.googleapis.com/auth/drive'] // And then we tell him where we want to go
    });

    // Once we are in the island we call our friend who knows the place.
    const service = google.drive({version: 'v3', auth});
    const requestBody = {
        name: 'render.js', // Once he arrives we tell her our treasure's name
    };
    const media = {
        mimeType: 'text/plain', // We tell them vaguely what kind of treasure it is
        body: fs.createReadStream(path.join(__dirname, '../render.js'))  // And give her the suitcase
    };

    // She tries to put the suitcase in the place we asked her to.
    try {
        const file = await service.files.create({
            requestBody,
            media,
            fields: 'id' // She takes a picture of the case and send it to us as a way to leverage her success
        });
        console.log('File ID', file.data.id); // And because it works, we received the picture.
        return file.data.id; // And we save it just in case we will need it later.
    } catch (err) {
        // TODO(developer) - Handle error
        // If something goes wrong with her, however.
        throw err; // She says 'oops, my bad' and we lose everything
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
