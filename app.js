#!/usr/bin/env node

const fs = require("fs");
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
	if (err) {
		//if err is defined
		console.log(err);
	}
	//create an object with all callbacks
	const statPromises = filenames.map((filename) => {
		return lstat(filename);
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);

		console.log(filenames[index], stats.isFile());
	}
});

//WRAPPING lstat with promise:
// const lstat = (filename) => {
// 	return new Promise((resolve, reject) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(stats);
// 		});
// 	});
// };
//				OR
// const util = require("util");
// const lstat = util.promisify(fs.lstat);
