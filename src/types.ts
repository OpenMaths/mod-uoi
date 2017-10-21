export type PropertyType = "MarkdownContent"
export type ConnectionType = "InternalRef"

export interface Property<T = any, U = PropertyType> {
  type: U
  content: T
}

export interface Connection<T = any, U = ConnectionType> {
  type: U
  content: T
}

export type MarkdownContentProperty = Property<string, "MarkdownContent">
export type InternalRefConnection = Property<string, "InternalRef">

export interface User {
  id: string
  fullName: string
  avatarUrl?: string
}

export interface UoI {
  id: string
  createdAt: string
  modifiedAt: string
  title: string
  author: User
  labels: string[]
  properties: Property[]
  connections: Connection[]
}
