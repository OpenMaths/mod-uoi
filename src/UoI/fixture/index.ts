import * as I from '../interface'

const getInternalRefConnection = (
  val: string = 'dae9696e-3d00-466a-9b14-b7486ddb2737',
): I.Connection => ({
  type: 'InternalRef',
  value: val,
})

const getTitleProperty = (val: string = 'Real-time capacity'): I.Property => ({
  type: 'Title',
  value: val,
})

const getMarkdownContentProperty = (
  val: string = 'National process improvement',
): I.Property => ({
  type: 'MarkdownContent',
  value: val,
})

const getLabelProperty = (
  val: string = 'Public-key asynchronous algorithm',
): I.Property => ({
  type: 'Label',
  value: val,
})

const getEmptyUoI = (): I.UoI => ({
  id: '479ec284-b38f-4c73-8848-67aab5cb9f7b',
  connections: [],
  properties: [],
})

const getUoIWithConnections = (): I.UoI => ({
  ...getEmptyUoI(),
  connections: [getInternalRefConnection()],
})

const getUoIWithProperties = (): I.UoI => ({
  ...getEmptyUoI(),
  properties: [
    getTitleProperty(),
    getLabelProperty(),
    getMarkdownContentProperty(),
  ],
})

const getFullUoI = (): I.UoI => ({
  ...getUoIWithProperties(),
  ...getUoIWithConnections(),
})

export default {
  getInternalRefConnection,
  getTitleProperty,
  getLabelProperty,
  getMarkdownContentProperty,
  getEmptyUoI,
  getUoIWithConnections,
  getUoIWithProperties,
  getFullUoI,
}
