export const isPending = (action) => {
  if (!(action && action.type)) {
    throw new Error('Action must have a required "type" field')
  }
  return /^(\w|\/)+\/pending$/.test(action.type)
}

export const isFulfilled = (action) => {
  if (!(action && action.type)) {
    throw new Error('Action must have a required "type" field')
  }
  return /^(\w|\/)+\/fulfilled$/.test(action.type)
}

export const isRejected = (action) => {
  if (!(action && action.type)) {
    throw new Error('Action must have a required "type" field')
  }
  return /^(\w|\/)+\/rejected$/.test(action.type)
}
