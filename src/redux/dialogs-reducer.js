const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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
    };

 const DialogsReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             return {
                 ...state,
                 newMessageBody: action.body
             };
         case SEND_MESSAGE :
             let body = state.newMessageBody;
             return {
                 ...state,
                 newMessageBody: '',
                 messages: [...state.messages, {id: 6, message: body}]
             };
         default:
             return state;

     }
}



export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}


export default DialogsReducer;