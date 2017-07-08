import { Some, None, Option } from 'tsp-monads'

import * as I from './interface'

export type GetPropertyByType =
  | Option<I.TitleProperty>
  | Option<I.LabelProperty>
  | Option<I.MarkdownContentProperty>

export const getPropertyByType = (
  uoi: I.UoI,
  type: I.PropertyType,
): GetPropertyByType => {
  const predicate = (p: I.Property) => p.type === type
  const value = uoi.properties.find(predicate)
  switch (type) {
    case 'Title':
      return Some(value as I.TitleProperty)
    case 'Label':
      return Some(value as I.LabelProperty)
    case 'MarkdownContent':
      return Some(value as I.MarkdownContentProperty)
    default:
      return None
  }
}
