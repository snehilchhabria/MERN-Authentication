import { configureStore } from 'reduxjs/toolkit';
 const store = configureStore({
    reducer: {},
    middlware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
 })

 export default store;
 