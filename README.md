# Notes App

This is a practise project to explore two npm modules chalk and yargs. In this project you can pass title and body of notes via command line arguments

## Installation

Download the zip or run following command

```bash
git clone https://github.com/achhetr/notes-app.git ./
```

## Usage

```
npm install
```

To run notes crud operation in command line

To ADD new notes, all notes title should be unique

```
node app.js add --title=`your notes title goes here` --body=`your notes body goes here`
```

To REMOVE note pass the title of the notes

```
node app.js remove --title=`your notes title goes here`
```

To get LIST of all notes title

```
node app.js list
```

To READ any notes

```
node app.js read --title=`your notes title goes here`
```

## Contributing

Pull requests are not welcome :)

## License

MIT
