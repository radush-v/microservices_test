import * as fs from 'fs';
import request from 'request';

const download = function (url: string, filename: string) {
    request.head(url, function (err, res, body) {
        request(url).pipe(fs.createWriteStream(filename));
    });
};

export { download };