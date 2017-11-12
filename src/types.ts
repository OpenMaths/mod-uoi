export type PropertyType = "MarkdownContent"
export type ConnectionType = "InternalRef"

export interface UoIProperty<T = any, U = PropertyType> {
  type: U
  content: T
}

export interface UoIConnection<T = any, U = ConnectionType> {
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

export enum Visibility {
  OnlyMe = "OnlyMe", Token = "Token", Public = "Public"
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
