//Elementos 
const notesContainer = document.querySelector('#notes-container'); 
const noteInput = document.querySelector('#note-content');
const addNoteButton = document.querySelector('.add-note');

// Funções
function showNotes(){
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    
    notesContainer.appendChild(noteElement);
  })  
}

function cleanNotes(){
  notesContainer.replaceChildren([]);
}

function addNote(){
  const notes = getNotes();
  const noteObject = {
    id: generateID(),
    content: noteInput.value, 
    fixed: false,
  };

  const noteElememt = createNote(noteObject.id, noteObject.content);
  notesContainer.appendChild(noteElememt);

  notes.push(noteObject);
  saveNotes(notes);
  noteInput.value = "";
}

function generateID(){
  return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed){
  const element = document.createElement("div");
  element.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.placeholder = "Adicione algum texto";
  
  element.appendChild(textarea);

  const pinIcon = document.createElement("i")
  pinIcon.classList.add(...["bi", "bi-pin"])

  element.appendChild(pinIcon);

  if(fixed){
    element.classList.add("fixed");
  }

  //Eventos dp elemento 
  element.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixNote(id);
  })
  return element;
}

function toggleFixNote(id) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.fixed = !targetNote.fixed;
  console.log(notes);
}




//Local Storage 

function getNotes(){
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  return notes;
}

function saveNotes(notes){
  localStorage.setItem("notes", JSON.stringify(notes));
} 

//Eventos 
addNoteButton.addEventListener('click', () => addNote())

//Inicialização
showNotes();