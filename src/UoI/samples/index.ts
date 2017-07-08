const getInternalRefConnection = (
  val: string = 'dae9696e-3d00-466a-9b14-b7486ddb2737',
) => ({
  type: 'InternalRef',
  value: val,
})

const getTitleProperty = (val: string = 'Real-time capacity') => ({
  type: 'Title',
  value: val,
})

const getMarkdownContentProperty = (
  val: string = 'National process improvement',
) => ({
  type: 'MarkdownContent',
  value: val,
})

const getLabelProperty = (
  val: string = 'Public-key asynchronous algorithm',
) => ({
  type: 'Label',
  value: val,
})

const EmptyUoI = {
  id: '479ec284-b38f-4c73-8848-67aab5cb9f7b',
  connections: [],
  properties: [],
}

const UoIWithConnections = {
  ...EmptyUoI,
  connections: [getInternalRefConnection()],
}

const UoIWithProperties = {
  ...EmptyUoI,
  properties: [
    getTitleProperty(),
    getLabelProperty(),
    getMarkdownContentProperty(),
  ],
}

const FullUoI = { ...UoIWithProperties, ...UoIWithConnections }

export {
  getInternalRefConnection,
  getTitleProperty,
  getLabelProperty,
  getMarkdownContentProperty,
  EmptyUoI,
  UoIWithConnections,
  UoIWithProperties,
  FullUoI,
}
