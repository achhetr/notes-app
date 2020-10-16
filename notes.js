const fs = require('fs');
const chalk = require('chalk');

const redLog = chalk.red.inverse.bold;
const greenLog = chalk.green.inverse.bold;
const whiteLog = chalk.inverse;

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title,
			body,
		});
		saveNotes(notes);
		console.log(greenLog('Item added'));
	} else {
		console.log(redLog('Duplicate found'));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();
	const removedNote = notes.filter((note) => note.title !== title);
	if (removedNote.length === notes.length) {
		console.log(redLog('Item do not exist'));
	} else {
		saveNotes(removedNote);
		console.log(greenLog(`${title} deleted`));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(whiteLog('List of all notes title'));
	notes.forEach((note) => {
		console.log(`${note.title}`);
	});
};

const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);
	if (note) {
		console.log(greenLog('Note found!'));
		console.log(`Title: ${title} \nBody: ${note.body}`);
	} else {
		console.log(redLog('Note not found'));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	addNote,
	removeNote,
	listNotes,
	readNote,
};
