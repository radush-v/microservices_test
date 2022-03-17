// import * as fs from 'fs';
// import request from 'request';

// const download = function (url: string): string {
//     const link = `img.${url.split('.').pop()?.trim()}`;

//     request.head(url, function () {
//         request(url).pipe(fs.createWriteStream(link));
//     });

//     return link;
// };

// export { download };

import * as fs from 'fs';
import Axios from 'axios';

async function download(url: string, filepath: string) {
    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .once('close', () => resolve(filepath));
    });
}

export { download }

