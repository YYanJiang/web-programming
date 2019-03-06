const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path){
	if(!path) 
		throw `You must provide a path.`;
	if(typeof path !== 'string') 
		throw `The path ${path} is not a string`;
	return await fs.readFileAsync(path, `utf-8`);
}

async function getFileAsJSON(path) {
	if(!path) 
		throw `You must provide a path.`;
	if(typeof path !== 'string') 
		throw `The path ${path} is not a string`;
	let data = await getFileAsString(path);
	return await JSON.parse(data);
}

async function saveStringToFile(path, text) {
	if(!path) 
		throw `You must provide a file path.`;
	if(typeof path !== 'string') 
		throw `The path ${path} is not a string`;
	if(!text) 
		throw `You must provide a text.`;
	if(typeof text !== 'string') 
		throw `The text ${text} is not a string`;
	await fs.writeFileAsync(path, text);
	return true;
}

async function saveJSONToFile(path, obj) {
	if(!path) 
		throw `You must provide a file path.`;
	if(typeof path !== 'string') 
		throw `The path ${path} is not a string`;
	if(!obj) 
		throw `You must provide an object.`;
	if(typeof obj !== 'object') 
		throw `The object ${obj} is not a object`;
	await saveStringToFile(path, JSON.stringify(obj));
	return true;
}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};