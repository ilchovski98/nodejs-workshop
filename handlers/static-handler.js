const fs = require('fs');
const url = require('url');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    }

    if (url.endsWith('js')) {
        return 'text/js';
    }

    if (url.endsWith('html')) {
        return 'text/html';
    }

    if (url.endsWith('png')) {
        return 'text/png';
    }

    if (url.endsWith('json')) {
        return 'text/json';
    }

    if (url.endsWith('jpg')) {
        return 'text/jpg';
    }

    if (url.endsWith('svg')) {
        return 'text/svg';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {
        fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, {
                    "Content-Type": "text/plain"
                })

                res.write('Error not found');
                res.end();
                return;
            }

            console.log(pathname);
            res.writeHead(202, {
                "Content-type": getContentType(pathname)
            })

            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}