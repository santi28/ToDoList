const getNote = () => {
  const url = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(url.entries());
  const title = params.title;

  const $noteWrapper = document.getElementById('note_wrapper');

  let notes = localStorage.getItem('notes')
  notes = !notes ? [] : JSON.parse(notes)
    
  const note = notes.find(note => note.noteTitle === title);

  const noteElement = SingleNote(
    note.noteTitle,
    note.notePriority,
    note.noteBody
  )

  $noteWrapper.replaceWith(noteElement)
}

getNote()