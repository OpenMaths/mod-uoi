export type PropertyType = "MarkdownContent"
export type ConnectionType = "InternalRef"

export interface UoIProperty<T = any, U = PropertyType> {
  id: string
  type: U
  content: T
}

export interface UoIConnection<T = any, U = ConnectionType> {
  id: string
  type: U
  content: T
}

export type MarkdownContentProperty = UoIProperty<string, "MarkdownContent">
export type InternalRefConnection = UoIProperty<string, "InternalRef">

export interface User {
  id: string
  fullName: string
  avatarUrl?: string
}

export enum VisibilityType {
  OnlyMe = "OnlyMe", Scoped = "Scoped", Public = "Public"
}

export interface Visibility {
  type: VisibilityType
  key: string
}

export interface UoI {
  id: string
  createdAt: string
  modifiedAt: string
  visibility: Visibility
  title: string
  author: User
  labels: string[]
  properties: UoIProperty[]
  connections: UoIConnection[]
}
