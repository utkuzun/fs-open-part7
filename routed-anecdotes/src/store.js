import { configureStore } from '@reduxjs/toolkit'

import notificationsReducer from './reducers/notificationsReducer'

const store = configureStore({
  reducer: {
    notification: notificationsReducer,
  },
})

export default store
