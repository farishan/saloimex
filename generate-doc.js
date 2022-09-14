const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

const IN = 'index.js'
const OUT = 'doc.md'

jsdoc2md
    .render({ files: IN })
    .then(data => {
        fs.writeFile(OUT, data, (err) => {
            if (err)
                console.log(err);
            else {
                console.log(`"${OUT}" written successfully.\n`);
            }
        });
    })