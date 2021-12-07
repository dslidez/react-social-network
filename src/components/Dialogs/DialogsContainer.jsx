import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
    dialogsPage: state.dialogsPage,
       //isAuth теперь находится в висаусредусере
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

//теперь диалогс мы передаем хоку
/*let AuthRedirectComponent = withAuthRedirect(Dialogs)*/



/*const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

/*export default DialogsContainer;*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

