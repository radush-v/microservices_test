const tesseract = require('tesseract.js');
import { recognizeText } from "../consumer/getText";

const testLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/HUP_10MB_1946_obverse.jpg/1024px-HUP_10MB_1946_obverse.jpg";

describe('Tesseract testing', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  test('Succesfull text absorb', () => {
    jest.spyOn(tesseract, 'recognize').mockResolvedValue({ data: { text: 'someText' } });
    recognizeText('string');
    expect(tesseract.recognize).toBeCalledTimes(1);
  });

  // test('Too big file', async () => {
  //   jest.spyOn(tesseract, 'recognize')
  //   recognizeText(testLink);
  //   expect(tesseract.recognize).toBeCalledTimes(1);
  // })
})
