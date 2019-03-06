const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main() {
		console.log("chapter1\n");
		try {
			console.log(await fileData.getFileAsJSON("chapter1.result.json"));
		} catch (e) {
			console.log("chapter1.result.json does not exist.")
			console.log("loading chapter1.txt and run the text metrics.")
			try{
				var t = await fileData.getFileAsString("chapter1.txt");
			} catch (e) {
				console.log(e);
			}
			var result = textMetrics.createMetrics(t);
			console.log("store the result of text metrics.");
			try {
				await fileData.saveJSONToFile("chapter1.result.json", result);
			} catch (e) {
				console.log(e);
			}
			console.log(result);
		}

		console.log('\n\n\n');

		console.log("chapter2\n");
		try {
			console.log(await fileData.getFileAsJSON("chapter2.result.json"));
		} catch (e) {
			console.log("chapter2.result.json does not exist.")
			console.log("loading chapter2.txt and run the text metrics.")
			try{
				var t = await fileData.getFileAsString("chapter2.txt");
			} catch (e) {
				console.log(e);
			}
			var result = textMetrics.createMetrics(t);
			console.log("store the result of text metrics.");
			try {
				await fileData.saveJSONToFile("chapter2.result.json", result);
			} catch (e) {
				console.log(e);
			}
			console.log(result);
		}

		console.log('\n\n\n');

		console.log("chapter3\n");
		try {
			console.log(await fileData.getFileAsJSON("chapter3.result.json"));
		} catch (e) {
			console.log("chapter3.result.json does not exist.")
			console.log("loading chapter3.txt and run the text metrics.")
			try{
				var t = await fileData.getFileAsString("chapter3.txt");
			} catch (e) {
				console.log(e);
			}
			var result = textMetrics.createMetrics(t);
			console.log("store the result of text metrics.");
			try {
				await fileData.saveJSONToFile("chapter3.result.json", result);
			} catch (e) {
				console.log(e);
			}
			console.log(result);
		}
}

main();