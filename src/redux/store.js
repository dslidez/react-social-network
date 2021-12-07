import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";

let store = {                                    //store - OOП
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: 12},
                {id: 1, message: 'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'how is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dymich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},


            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {                      //метод
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) {

        this._state.profilePage =  ProfileReducer( this._state.profilePage, action);
        this._state.dialogsPage =  DialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar =  SidebarReducer( this._state.sidebar, action);

        this._callSubscriber(this._state);


        }


}






export default store;
window.store = store;
