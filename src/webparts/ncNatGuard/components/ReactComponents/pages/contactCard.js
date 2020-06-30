import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h2> {props.contact.title} </h2>
            <h3>{props.contact.name}</h3>
        </div>
    )
}

export default ContactCard