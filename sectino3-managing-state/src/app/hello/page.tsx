import React from 'react'
import StateStructure from './StateStructure'
import SharingState from './SharingState'

type Props = {}

function page({ }: Props) {
    return (
        <div>
            <div>hello</div>
            <StateStructure />
            <SharingState />
        </div>
    )
}

export default page 