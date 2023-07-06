import { noteOperations } from "../services/note-service.js";
window.addEventListener("load", init);
function init() {
  showCounts();
  bindEvents();
  addSortIcons();
}
const enableButton = () => (document.querySelector("#delete").disabled = false);
const disableButton = () => (document.querySelector("#delete").disabled = true);

function bindEvents() {
  document.querySelector("#add").addEventListener("click", addNote);
  document.querySelector("#delete").addEventListener("click", deleteMarked);
  document.querySelector("#searchButton").addEventListener("click", search);
  document
    .querySelector("#toggleSearchButton")
    .addEventListener("click", toggleSearchField);
  document.querySelector("#update").addEventListener("click", updateNote);
}

function addSortIcons() {
  const sortObj = {
    id: 0,
    title: 1,
    cdate: 3,
  };

  for (const col in sortObj) {
    const index = sortObj[col];
    const th = document.querySelector(`.mainTable th:nth-child(${index + 1})`);
    const sortIcon = document.createElement("i");
    sortIcon.className = "fas fa-sort";
    th.appendChild(sortIcon);
    th.addEventListener("click", () => handleSortClick(th, sortIcon));
  }
}

function toggleSearchField() {
  const searchContainer = document.querySelector("#searchContainer");
  searchContainer.style.display =
    searchContainer.style.display === "none" ? "block" : "none";
}
function search() {
  const searchField = document.querySelector("#searchField").value;
  const searchValue = document
    .querySelector("#searchInput")
    .value.toLowerCase();
  const searchTableBody = document.querySelector("#searchTableBody");
  searchTableBody.innerHTML = "";

  const filteredNotes = noteOperations.getNotes().filter((note) => {
    const fieldValue = note[searchField].toLowerCase();
    return fieldValue.includes(searchValue);
  });

  filteredNotes.forEach((note) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${note.id}</td><td>${note.title}</td><td>${note.desc}</td><td>${note.cdate}</td><td>${note.importance}</td>`;
    searchTableBody.appendChild(row);
  });
}

function deleteMarked() {
  noteOperations.remove();
  printNotes(noteOperations.getNotes());
}
function showCounts() {
  noteOperations.markTotal() > 0 ? enableButton() : disableButton();
  document.querySelector("#total").innerText = noteOperations.total();
  document.querySelector("#marktotal").innerText = noteOperations.markTotal();
  document.querySelector("#unmarktotal").innerText =
    noteOperations.unMarkTotal();
}
function addNote() {
  const fields = ["id", "title", "desc", "cdate", "importance"];
  const noteObject = {};
  for (let field of fields) {
    noteObject[field] = document.querySelector(`#${field}`).value.trim();
  }
  noteOperations.add(noteObject);
  printNote(noteObject);
  showCounts();
}
function printIcon(myClassName = "trash", fn, id) {
  const iTag = document.createElement("i");
  iTag.setAttribute("note-id", id);
  iTag.className = `fa-solid fa-${myClassName} me-2 clickable-icon`;
  iTag.addEventListener("click", fn);
  return iTag;
}
function toggleMark() {
  const icon = this;
  const id = this.getAttribute("note-id");
  noteOperations.toggleMark(id);
  const tr = icon.parentNode.parentNode;
  tr.classList.toggle("table-danger");
  showCounts();
}

function printNotes(notes) {
  const tbody = document.querySelector("#notes");
  tbody.innerHTML = "";
  notes.forEach((note) => printNote(note));
  showCounts();
}
function printNote(noteObject) {
  const tbody = document.querySelector("#notes");
  const row = tbody.insertRow();
  for (let key in noteObject) {
    if (key == "isMarked") {
      continue;
    }
    const td = row.insertCell();
    td.innerText = noteObject[key];

    if (key === "importance") {
      td.style.backgroundColor = noteObject[key];
      td.innerText = "";
    }
  }
  const td = row.insertCell();
  td.appendChild(printIcon("trash", toggleMark, noteObject.id));
  td.appendChild(printIcon("user-pen", edit, noteObject.id));
}

function updateNote() {
  const id = document.querySelector("#id").value;
  const updatedNote = {
    title: document.querySelector("#title").value,
    desc: document.querySelector("#desc").value,
    cdate: document.querySelector("#cdate").value,
    importance: document.querySelector("#importance").value,
  };

  const note = noteOperations.searchById(id);
  if (note) {
    note.title = updatedNote.title;
    note.desc = updatedNote.desc;
    note.cdate = updatedNote.cdate;
    note.importance = updatedNote.importance;
    printNotes(noteOperations.getNotes());
    showCounts();
    clearForm();
  }
}
function edit() {
  const id = this.getAttribute("note-id");
  const note = noteOperations.searchById(id);

  if (note) {
    document.querySelector("#id").value = note.id;
    document.querySelector("#title").value = note.title;
    document.querySelector("#desc").value = note.desc;
    document.querySelector("#cdate").value = note.cdate;
    document.querySelector("#importance").value = note.importance;
  }
}

function clearForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#desc").value = "";
  document.querySelector("#cdate").value = "";
  document.querySelector("#importance").value = "";
}
