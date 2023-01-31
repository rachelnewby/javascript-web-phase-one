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

  it("Allows user to input new note in form and displays it on the page", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new Model();
    const view = new NotesView(notesModel);
    const inputEl = document.querySelector('#notes-input');
    inputEl.value = "Go to the gym";
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    expect(document.querySelector('.note').textContent).toEqual("Go to the gym");
  })

  it("Should display the right number of notes when displayNotes is called twice", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new Model();
    const view = new NotesView(notesModel);
    const inputEl = document.querySelector('#notes-input');
    inputEl.value = "Go to the gym";
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    inputEl.value = "Eat ice cream";
    buttonEl.click();
    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('.note').length).toEqual(2);
  })
})