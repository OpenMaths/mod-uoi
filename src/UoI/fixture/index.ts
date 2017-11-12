import { UoI, UoIProperty, UoIConnection, VisibilityType } from "../../types"

const getInternalRefConnection = (
  val: string = "dae9696e-3d00-466a-9b14-b7486ddb2737",
): UoIConnection => ({
  type: "InternalRef",
  content: val,
})

const getMarkdownContentProperty = (
  val: string = "National process improvement",
): UoIProperty => ({
  type: "MarkdownContent",
  content: val,
})

const getEmptyUoI = (): UoI => ({
  id: "479ec284-b38f-4c73-8848-67aab5cb9f7b",
  createdAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
  visibility: {
    type: VisibilityType.Scoped,
    key: "a4e51b8f-2bd8-404e-9c74-50dd462ce447"
  },
  title: "Some Title",
  author: {
    id: "67aab5cb9f7b-479ec284-b38f-4c73-8848",
    fullName: "Some Name",
  },
  labels: [],
  connections: [],
  properties: [],
})

const getUoIWithConnections = (): UoI => ({
  ...getEmptyUoI(),
  connections: [getInternalRefConnection()],
})

const getUoIWithProperties = (): UoI => ({
  ...getEmptyUoI(),
  properties: [getMarkdownContentProperty(), getMarkdownContentProperty()],
})

const getFullUoI = (): UoI => ({
  ...getUoIWithProperties(),
  ...getUoIWithConnections(),
})

export default {
  getInternalRefConnection,
  getMarkdownContentProperty,
  getEmptyUoI,
  getUoIWithConnections,
  getUoIWithProperties,
  getFullUoI,
}
