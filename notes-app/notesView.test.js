/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const Model = require('./notesModel')
const NotesView = require('./notesView');

describe("NotesView", () => {
  it("Creates a div for each note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new Model();
    notesModel.addNote('Go to the gym');
    notesModel.addNote('Take bins out');
    const view = new NotesView(notesModel);
    view.displayNotes();

    expect(document.querySelectorAll('div').length).toBe(3);
  })
})