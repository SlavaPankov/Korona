import {createFromTemplate} from "./createFromTemplate";

export function renderVideoFrame() {
  const template = `
    <iframe width="100%" src="https://www.youtube.com/embed/NeQJ0cLJfxA?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0" frameborder="0" autoplay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Видео-презентация продукта" class="m_b5"></iframe>
  `;

  return createFromTemplate(template);
}
