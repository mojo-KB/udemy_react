'use client'


import React, { useState } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'

type Props = {}

function page({ }: Props) {
    const [to, setTo] = useState(contacts[0])

    return (
        <div className='flex flex-row bg-black'>
            <div>
                <ContactList

                    contacts={contacts}
                    selectedContact={to}
                    onSelect={contact => setTo(contact)}
                />
            </div>
            <div>
                <Chat key={to.email} contact={to} />
            </div>

        </div>
    )
}

export default page

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];