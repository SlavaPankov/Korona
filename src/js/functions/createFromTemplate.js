/**
 * Создаёт DOM элемент из строки.
 * Элемент может быть только один (на верхнем уровне)
 * @param {string} template
 * @returns {HTMLElement}
 */

export function createFromTemplate(template) {
  const element = document.createElement('template');
  element.innerHTML = template.trim();

  return element.content.firstChild;
}
