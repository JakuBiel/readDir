const fs = require("fs");

fs.readdir(".", (err, filenames) => {
	if (err) {
		//if err is defined
		console.log(err);
	}
	console.log(filenames);
});
