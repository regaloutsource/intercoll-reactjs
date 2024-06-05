import { combineReducers } from "redux";
import authReducer from "../slices/auth.slice";



const rootReducer = combineReducers({
    authReducer
    
})


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer