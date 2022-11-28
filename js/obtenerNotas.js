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

  if (notes.length <= 0) {
    notes = [
      {
        id: 1,
        noteTitle: "Nota de ejemplo",
        notePriority: "alta",
        noteCategory: "supermercado",
        noteBody: "Esta es una nota de ejemplo, puedes borrarla o editarla a tu gusto."
      },
      {
        id: 2,
        noteTitle: "Una nota con prioridad baja",
        notePriority: "baja",
        noteCategory: "trabajo",
        noteBody: "Esta es una nota de ejemplo, con prioridad baja y perteneciente a la lista de trabajo.",
      },
      {
        id: 3,
        noteTitle: "Una nota para la lista de juegos",
        notePriority: "media",
        noteCategory: "juegos",
        noteBody: "Esta nota pertenece a la lista de juegos, podes borrarla o editar el cuerpo de la nota a tu gusto.",
      },
      {
        id: 4,
        noteTitle: "Otra nota de ejemplo",
        notePriority: "alta",
        noteCategory: "trabajo",
        noteBody: "Esta es una nota de ejemplo, puedes borrarla o editarla a tu gusto."
      },
      {
        id: 5,
        noteTitle: "Una nota con prioridad baja en la lista de juegos",
        notePriority: "baja",
        noteCategory: "juegos",
        noteBody: "Esta es una nota de ejemplo, con prioridad baja y perteneciente a la lista de juegos.",
      },
      {
        id: 6,
        noteTitle: "Una nota para la lista de supermercado",
        notePriority: "media",
        noteCategory: "supermercado",
        noteBody: "Esta nota pertenece a la lista de supermercado, podes borrarla o editar el cuerpo de la nota a tu gusto.",
      },
    ]
    localStorage.setItem('notes', JSON.stringify(notes))
  }
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
