import { download } from './download'

describe('Downloading files...', () => {
    test('Incorrect inputs', () => {
        expect(() => download('iamfalselink', 'file')).toThrowError()
    })
})