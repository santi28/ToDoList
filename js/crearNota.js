const submitNote = document.querySelector("#submitNote")
const notesWrapper = document.querySelector("#notesWrapper")

const generateID = () => (Math.random() + 1).toString(36).substring(7);

submitNote.addEventListener('submit', (e) => {
  const id = generateID()
  const noteTitle = document.querySelector("#title").value.trim()
  const notePriority = document.querySelector("#priority").value.trim()
  const noteCategory = document.querySelector("#listas").value.trim()
  const noteBody = document.querySelector("#body").value.trim()

  e.preventDefault();
  const note = { id, noteTitle, notePriority, noteCategory, noteBody }

  let notes = localStorage.getItem('notes')

  notes = !notes ? [] : JSON.parse(notes)

  // Comprueba que no exista una nota con el mismo nombre
  const isExist = notes.find(
    iteratedNote => iteratedNote.noteTitle === noteTitle
  )

  if (isExist) 
    return Toastify({
      text: "Ya existe una nota con ese nombre",
      duration: 3000,
      close: true,
      gravity: 'bottom',
      position: 'right',
      backgroundColor: "#1c1c1c",
    }).showToast();

  notes.push(note)

  localStorage.setItem('notes', JSON.stringify(notes))
  getNotes()
  alert('SE CREO UNA NOTA CABEZA DE CHOTA!')
})