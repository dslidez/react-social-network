import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    profilePage : ProfileReducer,
    dialogsPage : DialogsReducer,
    sidebar : SidebarReducer,
    usersPage : UsersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); //санк мидлвэир - это для того чтобы санки могли работать

window.store = store;

export default store;