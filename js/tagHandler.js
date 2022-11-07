const tags = {
  supermercado: "🛒 Supermercado",
  trabajo: "💼 Trabajo",
  juegos: "🎮 Juegos"
}

const tagHandler = () => {
  const $title = document.getElementById("notesTitle")

  // Obtiene el tipo de lista desde parametro
  const url = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(url.entries());
  const lista = params.lista;

  const tag = tags[lista];

  if (lista && !tag) return window.location.href = "/"

  if (lista) {
    const $tag = document.getElementById(lista)
    console.log($tag)
    $tag.classList.add('active')
  }
}

tagHandler()