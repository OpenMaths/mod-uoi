export type UoIType = "MarkdownContent"
export type ConnectionType = "InternalRef"

export interface CreateUoIProperty<T = any, U = UoIType> {
  type: U
  content: T
}

export interface UoIProperty<T = any, U = UoIType> {
  id: string
  type: U
  content: T
}

export interface CreateUoIConnection<T = any, U = ConnectionType> {
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
  OnlyMe = "OnlyMe",
  Scoped = "Scoped",
  Public = "Public",
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
  type: UoIType
  author: User
  labels: string[]
  properties: UoIProperty[]
  connections: UoIConnection[]
}
