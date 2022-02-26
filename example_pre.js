const fs = require("fs");
const path = require("path");
const BASE_OUTPUT_IMAGE_DIR = `${__dirname}/output_images`;

module.exports = function() {
    fs.readdir(BASE_OUTPUT_IMAGE_DIR, (err, files) => {
        if (err) console.log(err);
        for (const file of files) {
            fs.unlink(path.join(BASE_OUTPUT_IMAGE_DIR, file), err => {
                if (err) console.log(err);
            });
        }
    });
}