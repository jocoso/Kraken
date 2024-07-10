const path = require('path');
const initializer = require('../commands/initializer.js');
const fs = require('fs');

jest.mock('fs');

describe('Testing Kraken AVC Commands', () => {

    it('Should create a .kraken folder in the root directory without throwing an error', async () => {
        const rootPath = process.cwd();
        const mockMkdirSync = jest.spyOn(fs, 'mkdir').mockImplementation(() => {});

        expect(() => {
            initializer({force: false});
        }).not.toThrow();

        // Check if mkdirSync was called correctly
        expect(fs.mkdirSync).toHaveBeenCalledWith(rootPath + '/.kraken');

        mockMkdirSync.mockRestore(); // Restore the original function
    });

    it('Should run function initializer without throwing an error when --force flag', async () => {
        const rootPath = process.cwd();
        const mockRmSync = jest.spyOn(fs, 'rmSync').mockImplementation(() => {});
        jest.spyOn(fs, 'existsSync').mockReturnValue(true);

        await expect(initializer({force: false})).resolves.not.toThrow();
        await expect(initializer({force: true})).resolves.not.toThrow();

        expect(fs.rmSync).toHaveBeenCalled();

        mockRmSync.mockRestore();
    })

})