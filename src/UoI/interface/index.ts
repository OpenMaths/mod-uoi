export type PropertyType = 'Title' | 'Label' | 'MarkdownContent'
export type ConnectionType = 'InternalRef'

export interface Property<T = any, U = PropertyType> {
  type: U
  value: T
}

export type TitleProperty = Property<string, 'Title'>
export type LabelProperty = Property<string, 'Label'>
export type MarkdownContentProperty = Property<string, 'MarkdownContent'>

export interface Connection<T = any, U = ConnectionType> {
  type: U
  value: T
}

export type InternalRefConnection = Property<string, 'InternalRef'>

export interface UoI {
  id: string
  properties: Property[]
  connections: Connection[]
}
