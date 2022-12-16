import React from 'react'
import dynamic from 'next/dynamic'
const UseEffect = dynamic(() => import("../components/UseEffect"), { ssr: false })


type Props = {}

function effect({ }: Props) {
  return (
    <div>
      <UseEffect />
    </div>
  )
}

export default effect