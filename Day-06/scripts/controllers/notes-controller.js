function addNotes() {
  const fields = ["id", "title", "desc", "cdate", "importance"];
  const noteObject = {}; // obj literal
  for (let field of fields) {
    noteObject[field] = document.querySelector(`#${field}`).value;
  }
  printNote(noteObject);
}

function printNote(noteObject) {
  const tbody = document.querySelector("#notes");
  const row = tbody.insertRow();
  for (let key in noteObject) {
    const td = row.insertCell();
    td.innerText = noteObject[key];
  }
}

function deleteNotes() {
  const tbody = document.querySelector("#notes");
  const rowCount = tbody.rows.length;

  if (rowCount >= 1) {
    tbody.deleteRow(rowCount - 1);
  }
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
}