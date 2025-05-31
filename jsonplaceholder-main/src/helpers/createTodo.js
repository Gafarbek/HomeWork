export function createTodo(title, body, id) {
  const todoHtmlLayout = `
  <div class="post" data-id="${id}">
  <h3>${title}</h3>
  <p>
    ${body}
  </p>
  </div>
  `;

  return todoHtmlLayout;
}