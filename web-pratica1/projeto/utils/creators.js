/**
 * component: Element
 * attributes: Array<{name: string, value: boolean | string}>
 */
export const add_attributes = ({ component, attributes }) => {
  attributes.map(({ name, value }) => component.setAttribute(name, value))
}

/**
 * fatherComponent: Element
 * tag: string
 * attributes: Array<{name: string, value: boolean | string}>
 */
export const create_component = ({
  fatherComponent = document,
  tag,
  attributes = []
}) => {
  const component = fatherComponent.createElement(tag)

  add_attributes({ component, attributes })

  return component
}

