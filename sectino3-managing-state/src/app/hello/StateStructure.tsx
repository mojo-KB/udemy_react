"use client"
import React, { useState } from 'react'

type Props = {}

function StateStructure({ }: Props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    const handleFirstNameChange: any = (e: any) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange: any = (e: any) => {
        setLastName(e.target.value)
    }

    return (
        <div>
            <div>Let's check you in</div>
            <label htmlFor="firstname">First name:{' '}
                <input type="text" name="firstname" value={firstName} onChange={handleFirstNameChange} />
            </label>

            <label htmlFor="lastname">Last name:{' '}
                <input type="text" name="lastname" value={lastName} onChange={handleLastNameChange} />
            </label>

            <div>Your ticket will be issued to: {fullName}</div>
        </div>
    )
}

export default StateStructure