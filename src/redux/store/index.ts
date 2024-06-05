import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./root.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
  })


export const persistor = persistStore(store);