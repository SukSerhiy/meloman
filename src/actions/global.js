export const actionTypes = {
  SET_LOADING: 'global/SET_LOADING',
  SET_ERROR: 'global/SET_ERROR',
}

export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  error,
})

export const setLoading = (loading) => ({
  type: actionTypes.SET_LOADING,
  loading,
})
