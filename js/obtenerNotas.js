const getNotes = () => {
  const notesWrapper = document.querySelector("#notesWrapper")
  notesWrapper.innerHTML = ''

  // Obtiene las notas desde el localStorage
  let notes = localStorage.getItem('notes')
  notes = !notes ? [] : JSON.parse(notes)
  
  // Obtiene el tipo de lista desde parametro
  const url = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(url.entries());
  const lista = params.lista;

  console.log(lista)

  if (lista) notes = notes.filter(note => note.noteCategory === lista)
  console.log(notes.length <= 0)

  if (notes.length <= 0) return notesWrapper.innerHTML = "<p class='nonotes'>No hay notas que mostrar</p>" 
  console.log("cont")

  return notes.map(note => notesWrapper.appendChild(Note(note.noteTitle, note.notePriority, note.noteBody)))
}

getNotes()
