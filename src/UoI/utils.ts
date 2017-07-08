import { Some, None } from 'tsp-monads'
import * as I from './interface'

const getPropertyByType = (
  uoi: I.UoI,
  type = I.PropertyType,
): I.GetPropertyByType => {
  const predicate = (p: I.Property) => p.type === I.PropertyType[type]
  const value = uoi.properties.find(predicate)
  switch (type) {
    case I.PropertyType.Title:
      return Some(value as I.TitleProperty)
    case I.PropertyType.Label:
      return Some(value as I.LabelProperty)
    case I.PropertyType.MarkdownContent:
      return Some(value as I.MarkdownContentProperty)
    default:
      return None
  }
}

export { getPropertyByType }
