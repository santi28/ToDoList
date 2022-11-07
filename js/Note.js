const Note = (title, priority, body) => {
  const content = `
    <a href="/detalle.html?title=${title}">
      <header>
        <h3>${title}</h3>
        <div class="prioridad">
          <div class="circulito ${priority}"></div>
          <span>${priority.toUpperCase()}</span>
        </div>
      </header>
      <p>${body}</p>
    </a>
  `

  const node = document.createElement('article')
  node.innerHTML = content

  return node
}