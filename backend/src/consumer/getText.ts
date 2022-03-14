import tesseract from 'tesseract.js';

const recognizeText = (filename: string) => {
    tesseract.recognize(
        filename,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log(text);
      })
}

export {recognizeText};

