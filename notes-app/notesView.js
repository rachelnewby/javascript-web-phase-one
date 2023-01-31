class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector("#add-note-button");

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector("#notes-input").value;
      this.addNewNote(newNote);
      document.querySelector("#notes-input").value = "";
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }


  displayNotes() {
    let existingNotes = document.querySelectorAll(".note")
    existingNotes.forEach(note => note.remove())
    let notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl)
    });
  }
}

module.exports = NotesView;