const sharp = require('sharp');
const removeOutputFiles = require('./example_pre.js');


removeOutputFiles();

const FILE_NAMES = ['sample2', 'sample4'];
const BASE_INPUT_IMAGE_DIR = `${__dirname}/input_images`;
const BASE_OUTPUT_IMAGE_DIR = `${__dirname}/output_images`;

/**
 * リサイズ inside 横の長さでリサイズ
 */
for (let i = 0; i < 2; i++) {
    (async () => {
        try {
            await sharp(`${BASE_INPUT_IMAGE_DIR}/${FILE_NAMES[i]}.jpg`)
                .resize(200, null, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: true
                })
                .png({
                    quality: 80,
                    compressionLevel: 5
                })
                .toFile(`${BASE_OUTPUT_IMAGE_DIR}/${FILE_NAMES[i]}.png`);
        } catch (error) {
            console.log(error);
        }
    })();
}