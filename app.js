#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
	if (err) {
		//if err is defined
		console.log(err);
	}
	console.log(filenames);
});

// const lstat = filename =>{
// 	return new Promise ((resolve, reject)=>{
// 		fs.lstat(filename, (err, stats)=>{
// 			if(err){
// 				reject (err)
// 			}
// 			resolve(stats)
// 		})
// 	})
// }

// const util = require('util')
// const lstat = util.promisify(fs.lstat)
