const submitNote = document.querySelector("#submitNote")
const notesWrapper = document.querySelector("#notesWrapper")

const generateID = () => (Math.random() + 1).toString(36).substring(7);

submitNote.addEventListener('submit', (e) => {
  const id = generateID()
  const noteTitle = document.querySelector("#title").value
  const notePriority = document.querySelector("#priority").value
  const noteCategory = document.querySelector("#listas").value
  const noteBody = document.querySelector("#body").value

  e.preventDefault();
  const note = { id, noteTitle, notePriority, noteCategory, noteBody }

  let notes = localStorage.getItem('notes')

  notes = !notes ? [] : JSON.parse(notes)

  // Comprueba que no exista una nota con el mismo nombre
  const isExist = notes.find(
    iteratedNote => iteratedNote.noteTitle === noteTitle
  )

  if (isExist) return alert('LA NOTA EXISTE PEDAZO DE MOGOLICO!')

  notes.push(note)

  localStorage.setItem('notes', JSON.stringify(notes))
  getNotes()
  alert('SE CREO UNA NOTA CABEZA DE CHOTA!')
})