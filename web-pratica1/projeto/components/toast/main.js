import { create_component } from '../../utils/creators.js'

/**
 * severity: error | success | warning | default
 */
export const show_toast = ({ title, description, severity = 'default' }) => {
  const body = document.querySelector("body")

  const toast = create_component({
    tag: 'div',
    attributes: [
      { name: "id", value: "toast" },
    ]
  })

  toast.innerHTML = `
    <div id="img">${title}</div>
    <div id="desc">${description}</div>
  `

  toast.className = `${severity} show`;

  setTimeout(() => {
    toast.remove()
  }, 3000);

  body.append(toast)
}
