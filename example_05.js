const sharp = require('sharp');
const removeOutputFiles = require('./example_pre.js');


removeOutputFiles();

const FILE_NAME = 'sample2';
const BASE_INPUT_IMAGE_DIR = `${__dirname}/input_images`;
const BASE_OUTPUT_IMAGE_DIR = `${__dirname}/output_images`;

/**
 * サムネイル
 */
(async () => {
    try {
        await sharp(`${BASE_INPUT_IMAGE_DIR}/${FILE_NAME}.jpg`)
            .resize(150, 150)
            .png({
                quality: 80,
                compressionLevel: 9
            })
            .toFile(`${BASE_OUTPUT_IMAGE_DIR}/${FILE_NAME}.png`);
    } catch (error) {
        console.log(error);
    }
})();