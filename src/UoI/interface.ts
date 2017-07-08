export type PropertyType = 'Title' | 'Label' | 'MarkdownContent'
export type ConnectionType = 'InternalRef'

export interface Property<T = any> {
  type: PropertyType
  value: T
}

export interface Connection<T = string> {
  type: ConnectionType
  value: T
}

export type TitleProperty = Property<string>
export type LabelProperty = Property<string>
export type MarkdownContentProperty = Property<string>

export interface UoI {
  id: string
  properties: Property[]
  connections: Connection[]
}
