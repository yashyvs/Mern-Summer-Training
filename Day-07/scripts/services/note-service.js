import Note from "../models/note.js";

export const noteOperations = {
  notes: [],
  add(noteObject) {
    const note = new Note(noteObject);
    this.notes.push(note);
  },
  total() {
    return this.notes.length;
  },
  markTotal() {
    return this.notes.filter((note) => note.isMarked).length;
  },
  unMarkTotal() {
    return this.notes.length - this.markTotal();
  },
  remove(noteObject) {
    this.notes = this.notes.filter((note) => !note.isMarked);
    return this.notes;
  },
  search() {},
  sort() {},
  update() {},
  save() {},
  load() {},
  clearAll() {},
  saveToServer() {},
  loadFromOperation() {},
};
