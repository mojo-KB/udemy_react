import React, { useState, useEffect}from 'react'

export const Scroll = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const Scroll= () => {
      
        useEffect(() => {
          const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
          }
          window.addEventListener("scroll", updatePosition);
          updatePosition();
          return () => window.removeEventListener("scroll", updatePosition);
        }, []);
      
        return scrollPosition;
      };
      
  return (
    <div>Scroll</div>
  )
}
