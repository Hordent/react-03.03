import React, {Component} from 'react';



const msg = (props) => {
    let senderName = props.msg.usrName
    let text = props.msg.msgBody
    return (
        
        <li><strong>{senderName}:</strong> {text}</li>
    )
}

export default msg;