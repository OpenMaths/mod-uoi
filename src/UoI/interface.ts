import { Option } from 'tsp-monads'

enum PropertyType {
  Title = 'Title',
  Label = 'Label',
  MarkdownContent = 'MarkdownContent',
}
enum ConnectionType {
  InternalRef = 'InternalRef',
}

interface Property<T = any> {
  type: PropertyType
  value: T
}

type TitleProperty = Property<string>
type LabelProperty = Property<string>
type MarkdownContentProperty = Property<string>

interface Connection<T = string> {
  type: ConnectionType
  value: T
}

interface UoI {
  id: string
  properties: Property[]
  connections: Connection[]
}

type GetPropertyByType =
  | Option<TitleProperty>
  | Option<LabelProperty>
  | Option<MarkdownContentProperty>

export {
  PropertyType,
  TitleProperty,
  LabelProperty,
  MarkdownContentProperty,
  ConnectionType,
  Property,
  Connection,
  UoI,
  GetPropertyByType,
}
