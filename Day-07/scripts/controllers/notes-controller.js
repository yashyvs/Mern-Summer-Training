import { noteOperations } from "../services/note-service.js";

window.addEventListener("load", init);
function init() {
  showCounts();
  bindEvents();
}

function bindEvents() {
  document.querySelector("#add").addEventListener("click", addNotes);
  document.querySelector('#delete').addEventListener('click', deleteNotes);
  document.querySelector('#sort').addEventListener('click', sortNotes);
  document.querySelector('#clearAll').addEventListener('click', clearNotes);
}

function showCounts() {
  document.querySelector("#total").innerText = noteOperations.total();
  document.querySelector("#markTotal").innerText = noteOperations.markTotal();
  document.querySelector("#unMarkTotal").innerText =
    noteOperations.unMarkTotal();
}

function addNotes() {
  const fields = ["id", "title", "desc", "cdate", "importance"];
  const noteObject = {};

  for (let field of fields) {
    noteObject[field] = document.querySelector(`#${field}`).value.trim();
  }

  noteOperations.add(noteObject);
  printNote(noteObject);
  showCounts();
}

function printNote(noteObject) {
  const tbody = document.querySelector("#notes");
  const row = tbody.insertRow();
  for (let key in noteObject) {
    const td = row.insertCell();
    td.innerText = noteObject[key];
  }
  const td = row.insertCell();
  td.appendChild(printIcon("trash", noteObject));
  td.appendChild(printIcon("pen-to-square", noteObject));
}

function printIcon(myClassName = "trash", noteObject) {
  const iTag = document.createElement("i");
  iTag.className = `fa-solid fa-${myClassName} me-2 clickable-icon`;

  iTag.addEventListener("click", function () {
    trashIcon(noteObject, iTag);
  });
  return iTag;
}

function trashIcon(noteObject, icon) {
  const row = icon.parentElement.parentElement;
  if (row.style.backgroundColor === "red") {
    icon.parentNode.style.backgroundColor = "white";
    row.style.backgroundColor = "white";
    noteObject.isMarked = false;
  } else {
    icon.parentNode.style.backgroundColor = "red";
    row.style.backgroundColor = "red";
    noteObject.isMarked = true;
  }
  showCounts();
}

function deleteNotes() {
  const tbody = document.querySelector("#notes");
  const rows = tbody.querySelectorAll("tr");

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row.style.backgroundColor === "red") {
      tbody.removeChild(row);
      noteOperations.remove(row);
    }
  }

  showCounts();
}

function sortNotes() {
  const tbody = document.querySelector("#notes");
  const rows = Array.from(tbody.rows);
  rows.sort((rowA, rowB) => {
    const idA = parseInt(rowA.cells[0].innerText);
    const idB = parseInt(rowB.cells[0].innerText);
    return idA - idB;
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

function clearNotes() {
  const tbody = document.querySelector("#notes");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  showCounts();
}
