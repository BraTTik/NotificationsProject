export const updateState = <T, D extends object>(state: T, data: D): T => {
  return { ...state, ...data }
}
