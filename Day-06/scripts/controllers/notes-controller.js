function addNotes() {
  // read id, title, desc, completion date, importance
  // const id = document.querySelector('#id').value;
  // const title = document.querySelector('#title').value;
  // const desc = document.querySelector('#desc').value;
  // const cdate = document.querySelector("#cdate").value;
  // const importance = document.querySelector("#importance").value;

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
