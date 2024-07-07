/**
 * Insert new file
 * @return{obj} file ID
 */
async function uploadFile(clientEmail, privateKey) {
    const fs = require('fs');
    const {GoogleAuth} = require('google-auth-library');
    const {google} = require('googleapis');

    

    // Get credentials and build service
    // TODO (developer) - Use appropriate auth mechanism for your app
    const auth = new GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/drive'

    ]});
    
    const service = google.drive({version: 'v3', auth});
    const requestBody = {
        name: 'render.js',
        fields: 'id',
    };
    const media = {
        mimeType: 'text/plain',
        body: fs.createReadStream('./render.js')
    };

    try {
        const file = await service.files.create({
            requestBody,
            media: media,
        });
        console.log('File ID', file.data.id);
        return file.data.id;
    } catch (err) {
        // TODO(developer) - Handle error
        throw err;
    }
}

module.exports = uploadFile;
