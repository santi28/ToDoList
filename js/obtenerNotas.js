const getNotes = () => {
  const notesWrapperEven = document.querySelector("#notesWrapperEven")
  const notesWrapperOdd = document.querySelector("#notesWrapperOdd")
  notesWrapperEven.innerHTML = ''; notesWrapperOdd.innerHTML = '';

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

  if (notes.length <= 0) 
    return notesWrapper.innerHTML = "<p class='nonotes'>No hay notas que mostrar</p>" 

  // Si el indice es par, se agrega a la lista de notas pares
  // Si el indice es impar, se agrega a la lista de notas impares
  notes.forEach((note, index) => {
    const { noteTitle, notePriority, id } = note
    const noteBody = getFirstWords(note.noteBody);

    (index % 2 === 0 || notesWrapperEven.offsetHeight < notesWrapperOdd.offsetHeight) ?
      notesWrapperEven.appendChild(Note(noteTitle, notePriority, noteBody, id)):
      notesWrapperOdd.appendChild(Note(noteTitle, notePriority, noteBody, id))
  })
}

const getFirstWords = (note, noteLength = 85) => {
  const words = note.split(' ')
  const firstWords = words.slice(0, noteLength)
  const firstWordsString = firstWords.join(' ')
  return words.length > noteLength ? `${firstWordsString}...` : firstWordsString
}

getNotes()
