const copyFile = require('fs-copy-file');
const fs = require('fs');

var dir = './dist';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
 
// destination.txt will be created or overwritten by default.
copyFile('./src/template/index.html', './dist/index.html', (err) => {
    if (err)
        throw err;
    
    console.log('source.txt was copied to destination.txt');
});