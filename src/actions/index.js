export const login = payload => {
  return {
    type: 'LOGIN',
    payload
  }
}

export const setCategories = payload => {
  return {
    type: 'SET_CATEGORIES',
    payload
  }
}