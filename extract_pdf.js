import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('BASANT_FSD_DEVELOPER.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_extracted.txt', data.text);
    console.log('Extraction complete. Saved to resume_extracted.txt');
}).catch(function(error) {
    console.error('Error extracting PDF:', error);
});
