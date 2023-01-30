const NotesModel = require('./notesModel');

describe("NotesModel", () => {
  
  const model = new NotesModel();
  
  it("Returns an empty array", () => {
    expect(model.getNotes()).toEqual([])
  });

  it("Adds a note", () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  });

  it("Resets the notes to an empty list", () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([])
  });
})