const deleteNote = (name) => {

  console.log({name});

  let notes = localStorage.getItem('notes')
  notes = !notes ? [] : JSON.parse(notes)

  const newNotes = notes.filter(note => note.noteTitle !== name)
  localStorage.setItem('notes', JSON.stringify(newNotes))

  location.href = '/index.html'
}