import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotif(state, action) {
      return action.payload.message
    },

    resetNotif() {
      return ''
    },
  },
})

export const displayNotification = (message) => {
  return async (dispatch) => {
    dispatch(setNotif({ message }))

    setTimeout(() => {
      dispatch(resetNotif())
    }, 1000)
  }
}

export const { setNotif, resetNotif } = notificationSlice.actions
export default notificationSlice.reducer
