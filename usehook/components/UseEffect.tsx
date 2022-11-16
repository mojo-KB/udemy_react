import React from 'react'
import { useEffect, useState } from 'react'
type Props = {}

function UseEffect({}: Props) {
    const [windowWidth, setWindowWidth]  = useState(window.innerWidth)
    const [name, setName] = useState<string>("")


    // useEffect perform side effects on a functional component

    // Class Components : use life cycle methods
    /*
    componentDidMount() : Lifecycle function when component mounts/loads

    componentDidUpdaet() : Lifecycle functions wehn components props change

    componentWillUnmount() : Lifecycle functions when components unmounts/cleanup functions
    */
    // Functional Components : useEffect hook


    // On Every render - note that it doesn't have dependencies
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth)
    })


    

  return (
    <div>UseEffect</div>
  )
}

export default UseEffect