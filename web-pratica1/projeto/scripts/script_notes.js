//Elementos 
const notesContainer = document.querySelector('#notes-container'); 
const noteInput = document.querySelector('#note-content');
const addNoteButton = document.querySelector('.add-note');

// Funções 
function addNote(){
  console.log("Testando");

  const noteObject = {
       id: 1,
       content: "", 
       fixed: false,

  }
}

//Eventos 
addNoteButton.addEventListener('click', () => addNote() )