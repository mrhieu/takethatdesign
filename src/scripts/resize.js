// After extract leaftdb.tar.gz, have to rename the folder to leafdb for the script to run correctly

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const DIR_INPUT = '../input/images';
const DIR_OUTPUT = '../output/images';
const DIR_SMALL = 'small';
const MAX_WIDTH_LOGO = 600;
const MAX_WIDTH_BANNER = 1000;
const MAX_WIDTH_SCREENSHOT = 600;
const MAX_WIDTH_SCREENSHOT_SMALL = 240;

function readFiles() {
	// joining path of directory
	const directoryPath = path.join(__dirname, DIR_INPUT);

	fs.readdir(directoryPath, (err, files) => {
		if (err) {
			throw err;
		}

		files.forEach(file => {
			if (file.match(/\.*-.*\.\w{3}/i)) {
				checkMetadata(file);
			}
		})
	})
}

function getImageType(metadata) {
	let type = 'UNKNOWN';

	if (metadata.width === metadata.height) {
		type = 'LOGO';
	} else if (metadata.width > metadata.height) {
		type = 'BANNER';
	} else {
		type = 'SCREENSHOT';
	}

	return type;
}

function checkAndCreateFolder(dirPath) {
	if (!fs.existsSync(dirPath)) {
		return fs.mkdirSync(dirPath);
	}
}

function resize(sharpInstance, width, outputPath) {
	return sharpInstance
		.clone()
		.resize(width)
		.jpeg({
			quality: 90
		})
		.toFile(toJpg(outputPath));
}

function isGif(fileName) {
	return /\.gif$/.test(fileName);
}

function toJpg(fileName) {
	return fileName.replace(/\.(\w*)$/i, '.jpg');
}

function checkMetadata(file) {
	const image = sharp(path.join(__dirname, DIR_INPUT, file));

	// Create OUTPUT folder if not existing
	checkAndCreateFolder(path.join(__dirname, DIR_OUTPUT));

	image
		.metadata()
		.then(metadata => {
			// console.info('METADATA', metadata); // eslint-disable-line
			const imageType = getImageType(metadata);

			if (metadata.format.toUpperCase() === 'GIF') {
				// Don't resize, just make copies
				fs.copyFile(path.join(__dirname, DIR_INPUT, file), path.join(__dirname, DIR_OUTPUT, file), err => {
					if (err) throw err;
				});
				fs.copyFile(path.join(__dirname, DIR_INPUT, file), path.join(__dirname, DIR_OUTPUT, DIR_SMALL, file), err => {
					if (err) throw err;
				});

				return;
			}

			switch (imageType) {
				case 'LOGO':
				 	resize(image, MAX_WIDTH_LOGO, path.join(__dirname, DIR_OUTPUT, file));
					break;
				case 'BANNER':
					resize(image, MAX_WIDTH_BANNER, path.join(__dirname, DIR_OUTPUT, file));
					break;
				default:// SCREENSHOT
					resize(image, MAX_WIDTH_SCREENSHOT, path.join(__dirname, DIR_OUTPUT, file));

					// Create OUTPUT SMALL folder if not existing
					checkAndCreateFolder(path.join(__dirname, DIR_OUTPUT, DIR_SMALL));

					resize(image, MAX_WIDTH_SCREENSHOT_SMALL, path.join(__dirname, DIR_OUTPUT, DIR_SMALL, file));
			}
		})

}

/**
	MAIN
*/
readFiles();
