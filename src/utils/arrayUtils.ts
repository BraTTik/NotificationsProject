export const updateItemInArrayByIndex = <T>(array: T[], index: number, item: T) => {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1)
  ]
}
