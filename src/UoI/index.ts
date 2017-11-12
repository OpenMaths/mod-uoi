import { Some, None, Option } from "@threestup/monads"
import { isEqual } from "@openmaths/utils"

import { MarkdownContentProperty, UoI, PropertyType, UoIProperty } from "../types"

export type FoundProperty = Option<MarkdownContentProperty>

const getPropertyByType = (uoi: UoI, type: PropertyType): FoundProperty => {
  const predicate = (p: UoIProperty) => isEqual(p.type, type)
  const property = uoi.properties.find(predicate)
  switch (type) {
    case "MarkdownContent":
      return Some(property as MarkdownContentProperty)
    default:
      return None
  }
}

export { getPropertyByType }
