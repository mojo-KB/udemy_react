import React from 'react'
import { useEffect, useState } from 'react'

type Props = {}

function UseEffect({ }: Props) {
  const [windowWidth, setWindowWidth] = useState(globalThis.window?.innerWidth)
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
  // useEffect does not have any dependencies
  useEffect(() => {
    console.log("Components mount on every render")
  })


  // On first render/mount only - Component
  // useEffect and [] an empty dependencies
  useEffect(() => {
    console.log("Components did mount on first render")
  }, [])

  // when the given props chnage or componentDidUpdate(prevProps) lifecycle functions
  useEffect(() => {
    console.log(`Component did update. The name has been changed to ${name}`)

    return () => {
      // cleanup function or a return function
      console.log("Components is unmounted")
    }
  }, [name])


  // componentWillUnmount() lifecycle functions 
  // having a cleaned up function or a return function
  const updateWindowWidth = () => {
    setWindowWidth(globalThis.window?.innerWidth)
  }



  // useEffect(() => {
  //   // on first render
  //   console.log("attach listener")
  //   globalThis.window?.addEventListener("resize", updateWindowWidth)


  //   return () => {
  //     // when component unmounts, this will run
  //     console.log("detach listener")
  //     globalThis.window?.removeEventListener("resize", updateWindowWidth)
  //   }
  // })

  useEffect(() => {
    // on first render
    console.log("attach listener")
    globalThis.window?.addEventListener("resize", updateWindowWidth)

  }, [])





  return (
    <div>
      <div>
        <h1>The UseEffect Hook</h1>
        <h2>The window width is: {windowWidth}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder-="Enter a name"
        />

      </div>
    </div>
  )
}

export default UseEffect
