import React from 'react'

type Props = {
    selectedContact: any;
    contacts: any;
    onSelect: any;
}

function ContactList({
    selectedContact,
    contacts,
    onSelect
}: Props) {
    return (
        <div>ContactList</div>
    )
}

export default ContactList