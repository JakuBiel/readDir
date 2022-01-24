const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
	if (err) {
		//if err is defined
		console.log(err);
	}
	console.log(filenames);
});
