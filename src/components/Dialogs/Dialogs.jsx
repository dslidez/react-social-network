import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

   let dialogsElements=state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements=state.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody=state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

if (!props.isAuth) return <Redirect to={"/login"} /> ;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
              <div>  {messagesElements}</div>

               <div> <textarea placeholder={'Enter your message'}
                               onChange={onNewMessageChange}
                               value={newMessageBody}></textarea> </div>
               <div className={s.addmessage}> <button onClick={onSendMessageClick}>Send</button> </div>
            </div>
        </div>

    )
}

export default Dialogs;